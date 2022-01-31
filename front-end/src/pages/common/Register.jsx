import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerRegister } from '../../styles/mainRegister';
import RegisterForm from '../../components/RegisterForm';

import { Global } from '../../context';

function Register() {
  const {
    initialRoutes,
    authToken,
    user,
  } = useContext(Global.Context);

  const navigate = useNavigate();

  useEffect(() => {
    if (authToken && user.role) {
      return navigate(initialRoutes[user.role]);
    }
  });

  return (
    <ContainerRegister>
      <h1>Nome do nosso app</h1>
      <RegisterForm />
    </ContainerRegister>
  );
}

export default Register;
