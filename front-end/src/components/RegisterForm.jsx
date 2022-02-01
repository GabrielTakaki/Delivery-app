import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt from 'jsonwebtoken';

import { FormRegister, LabelRegister } from '../styles/mainRegister';
import { LoginInput, LoginButton, ButtonDiv } from '../styles/mainLogin';
// import useLocalStorage from '../hooks/useLocalStorage';

import { Global } from '../context';
import { postUserRegister } from '../services/api';

function RegisterForm() {
  const { setAuthTokenOnAll, setUser } = useContext(Global.Context);
  const [registerForm, setRegisterForm] = useState({ email: '', password: '', name: '' });
  const [disabled, setDisable] = useState(false);
  const [hiddenInvalidEmail, setHiddenInvalidEmail] = useState(false);
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setRegisterForm({ ...registerForm, [name]: value });
  };

  useEffect(() => {
    const { email, password, name } = registerForm;
    const passwordMinLength = 6;
    const userMinLength = 12;
    const Patt = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    const valid = (
      Patt.test(email)
      && password.length >= passwordMinLength
      && name.length >= userMinLength
    );
    if (valid) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [registerForm]);

  const submitRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await postUserRegister(registerForm);

      const { email, name, role } = jwt.decode(data.token);

      setUser({ email, name, role, token: data.token });
      setAuthTokenOnAll(data.token);

      setRegisterForm({ email: '', password: '', name: '' });
      navigate('/customer/products');
    } catch (err) {
      const CONFLICT = 409;
      if (err.response.status === CONFLICT) setHiddenInvalidEmail(true);
    }
  };
  return (
    <>
      <FormRegister action="submit">
        <h3>Register</h3>
        <LabelRegister htmlFor="name">
          Nome
          <LoginInput
            placeholder="Seu nome"
            type="text"
            testId="common_register__input-name"
            onChange={ handleChange }
            value={ registerForm.name }
            name="name"
          />
        </LabelRegister>
        <LabelRegister htmlFor="email">
          Email
          <LoginInput
            placeholder="seu-email@site.com.br"
            type="email"
            testId="common_register__input-email"
            onChange={ handleChange }
            value={ registerForm.email }
            name="email"
          />
        </LabelRegister>
        <LabelRegister htmlFor="password">
          Senha
          <LoginInput
            placeholder="********"
            type="password"
            testId="common_register__input-password"
            onChange={ handleChange }
            value={ registerForm.password }
            name="password"
          />
        </LabelRegister>
        <ButtonDiv>
          <LoginButton
            type="button"
            data-testid="common_register__button-register"
            disabled={ disabled }
            onClick={ (e) => submitRegister(e) }
          >
            Cadastrar
          </LoginButton>
        </ButtonDiv>
      </FormRegister>
      { hiddenInvalidEmail && (
        <span
          data-testid="common_register__element-invalid_register"
        >
          Email já registrado!
        </span>
      )}
    </>
  );
}

export default RegisterForm;
