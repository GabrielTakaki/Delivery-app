import styled from 'styled-components';

const statusColors = {
  preparando: '#8cd940',
  entregue: '#2FC18C',
  pendente: '#d9ca40',
  emTransito: '#4aa1ff',
};

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 0 10px;
  margin-top: 20px;
  border: 1px solid #000;
  border-bottom: none;
  padding: 10px;
  background-color: lightgray;
`;

export const Span = styled.span`
  font-size: calc(0.5em + 0.5vw);
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  &:nth-child(3) {
    background-color: rgba(255, 255, 255, 0.3);
  }
  &:nth-child(4) {
  background-color: ${({ status }) => statusColors[
    status === 'Em Trânsito' ? 'emTransito' : ''
  ]};
  }
`;

export const Button = styled.button`
  font-size: calc(0.5em + 0.5vw);
  background-color: green;
  color: #fff;
  border: none;
  padding: 0 20px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
  }
  &:active {
    transform: scale(0.99);
  }
  &:disabled {
    background-color: gray;
    cursor: initial;
    &:hover {
      transform: none;
    }
  }
`;
