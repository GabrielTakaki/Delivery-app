import styled from 'styled-components';

export const AddressContainer = styled.section`
  border: 1px solid #000;
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

export const FormAddress = styled.form`
  display: flex;
`;

export const LabelAddress = styled.label`
  margin: 10px;
  display: flex;
  width: 100%;
  flex-direction: column;
  &:nth-child(1) {
    width: 35%;
  }
  &:nth-child(3) {
    width: 20%;
  }
`;

export const InputAddress = styled.input`
  height: 30px;
  margin: 5px 0;
`;

export const SelectForm = styled.select`
  height: 35px;
  margin: 6px 0;
`;

export const ButtonAddress = styled.button`
  height: 45px;
  font-size: calc(0.5em + 0.5vw);
  margin: 15px 0;
  width: 20%;
  background-color: green;
  color: #fff;
  border: none;
  border-radius: 15px;
  align-self: center;
`;
