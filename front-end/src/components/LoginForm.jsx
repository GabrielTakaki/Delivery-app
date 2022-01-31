import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Jwt from 'jsonwebtoken';

import { Global } from '../context';
import { postUserLogin } from '../services/api';

function LoginForm() {
  const [disable, setDisable] = useState(true);
  const [hidden, setHidden] = useState(true);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const { setAuthTokenOnAll, setUser } = useContext(Global.Context);
  const navigate = useNavigate();

  /* Direcionamento para o registro  */
  const goRegister = () => navigate('/register');

  /* salva mudanças do input no estado local */
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  /* A cada mudança nos inputs e feito a validação para liberação do butão */
  useEffect(() => {
    const { email, password } = loginForm;
    const minLength = 6;
    const Patt = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    const valid = (Patt.test(email) && password.length >= minLength);

    if (valid) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [loginForm]);

  /* Função responsável pelo login do user */
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await postUserLogin(loginForm);

      if (data.token) {
        const { token } = data;
        const { email, name, role } = Jwt.decode(token);
        setAuthTokenOnAll(token);
        setUser({ email, name, role, token });

        const paths = {
          customer: '/customer/products',
          seller: '/seller/orders',
          administrator: '/admin/manage',
        };
        navigate(paths[role]);
      }
    } catch (error) {
      console.log(error);
      setHidden(false);
    }
  };

  return (
    <div>
      <form action="submit">

        <label htmlFor="email">
          Login
          <input
            type="text"
            name="email"
            data-testid="common_login__input-email"
            placeholder="email@trybeer.com.br"
            value={ loginForm.email }
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            data-testid="common_login__input-password"
            placeholder="*********"
            value={ loginForm.password }
            onChange={ handleChange }
          />
        </label>

        <button
          type="submit"
          data-testid="common_login__button-login"
          disabled={ disable }
          onClick={ handleSubmit }
        >
          Login
        </button>

        <button
          type="button"
          data-testid="common_login__button-register"
          onClick={ goRegister }
        >
          Cadastre-se
        </button>

      </form>

      <span
        hidden={ hidden }
        data-testid="common_login__element-invalid-email"
      >
        Email não cadastrado/errado.
      </span>
    </div>
  );
}

export default LoginForm;
