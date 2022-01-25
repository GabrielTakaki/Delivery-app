import React, { useState, useEffect } from 'react';
import Input from './Input';
import { FormRegister } from '../styles/mainRegister';

function RegisterForm() {
  const [registerForm, setRegisterForm] = useState({ email: '', password: '', name: '' });
  const [disabled, setDisable] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setRegisterForm({ ...registerForm, [name]: value });
  };

  useEffect(() => {
    const { email, password, name } = registerForm;
    const passwordMinLength = 6;
    const nameMinLength = 12;
    const Patt = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    const valid = (
      Patt.test(email)
      && password.length >= passwordMinLength
      && name.length >= nameMinLength
    );
    console.log(valid);

    if (valid) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [registerForm]);
  return (
    <>
      <FormRegister action="submit">
        <h3>Register</h3>
        <Input
          text="Nome"
          placeholder="Seu nome"
          type="text"
          data-testid="common_register__input-name"
          onChange={ handleChange }
          value={ registerForm.name }
          name="name"
        />
        <Input
          text="Email"
          placeholder="seu-email@site.com.br"
          type="email"
          data-testid="common_register__input-email"
          onChange={ handleChange }
          value={ registerForm.email }
          name="email"
        />
        <Input
          text="Senha"
          placeholder="********"
          type="password"
          data-testid="common_register__input-password"
          onChange={ handleChange }
          value={ registerForm.password }
          name="password"
        />
        <button
          type="button"
          data-testid="common_register__button-register"
          disabled={ disabled }
        >
          Cadastrar
        </button>
      </FormRegister>
      <span
        data-testid="common_register__element-invalid_register"
      >
        { null }
      </span>
    </>
  );
}

export default RegisterForm;
