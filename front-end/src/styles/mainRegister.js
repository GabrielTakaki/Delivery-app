import styled from 'styled-components';

export const ContainerRegister = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 80vh;
`;

export const FormRegister = styled.main`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: center;
  border: 1px solid green;
  font-size: calc(0.6em + 0.6vw);
  align-items: center;
  padding: 80px 0;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
`;

export const LabelRegister = styled.label`
  width: 70vw;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: start;
`;
