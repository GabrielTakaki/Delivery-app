import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [disable, setDisable] = useState(true);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const goRegister = () => navigate('/register');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  useEffect(() => {
    const { email, password } = loginForm;
    const minLength = 6;
    const Patt = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    const valid = (Patt.test(email) && password.length >= minLength);
    console.log(valid);

    if (valid) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [loginForm]);

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
        data-testid="common_login__element-invalid-email"
      >
        { null }
      </span>
    </div>
  );
}

export default LoginForm;
