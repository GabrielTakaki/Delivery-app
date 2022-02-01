import styled from 'styled-components';

export const ContainerLogin = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const MainLogin = styled.main`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: center;
  border: 1px solid green;
  font-size: calc(0.6em + 0.6vw);
  align-items: center;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  padding: 80px 0;
`;

export const LoginInput = styled.input`
  width: 100%;
  max-width: 700px;
  height: 40px;
  border: none;
  margin-top: 10px;
  border-bottom: 1px solid #000;
  padding: 0 10px;
  background-color: transparent;
  margin-bottom: 10px;
  ::placeholder {
    color: #ccc;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  max-width: 400px;
  min-width: 100px;
  margin-top: 10px;
  height: 30px;
  border-radius: 20px;
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.3);
  color: #fff;
  border: none;
  background-color: green;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: unset;
  }
`;

export const ButtonDiv = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: start;
`;
