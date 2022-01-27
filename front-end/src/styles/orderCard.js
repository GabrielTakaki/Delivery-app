import styled from 'styled-components';

const statusColors = {
  preparando: '#8cd940',
  entregue: '#2FC18C',
  pendente: '#d9ca40',
  emTransito: '#4aa1ff',
};

export const OrderCardContainer = styled.button`
  border: 1px solid #000;
  border-radius: 10px;
  display: flex;
  flex-flow: column wrap;
  align-content: center;
  align-items: center;
  width: 300px;
  padding: 10px;
  * {
    margin: 0;
  }
  `;

export const Status = styled.span`
  background-color: ${({ status }) => statusColors[
    status === 'Em Trânsito' ? 'emTransito' : status.toLowerCase()
  ]};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
`;
