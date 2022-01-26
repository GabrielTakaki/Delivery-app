import React from 'react';
import { ContainerRegister } from '../../styles/mainRegister';
import RegisterForm from '../../components/RegisterForm';

function Register() {
  return (
    <ContainerRegister>
      <h1>Nome do nosso app</h1>
      <RegisterForm />
    </ContainerRegister>
  );
}

export default Register;
