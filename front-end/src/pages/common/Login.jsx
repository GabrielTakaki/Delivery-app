import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/LoginForm';
import { ContainerLogin, MainLogin } from '../../styles/mainLogin';

import { Global } from '../../context';

function Login() {
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
    <ContainerLogin>
      <MainLogin>
        <LoginForm />
      </MainLogin>
    </ContainerLogin>
  );
}

export default Login;
