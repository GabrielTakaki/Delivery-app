import React from 'react';
import LoginForm from '../../components/LoginForm';
import ContainerLogin from '../../styles/mainLogin';

function Login() {
  return (
    <ContainerLogin>
      <h1>Nome do nosso app</h1>
      <LoginForm />
    </ContainerLogin>
  );
}

export default Login;
