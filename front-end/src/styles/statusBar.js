import styled from 'styled-components';

const statusColors = {
  preparando: '#8cd940',
  entregue: '#2FC18C',
  pendente: '#d9ca40',
  emTransito: '#4aa1ff',
};

const Status = styled.span`
  background-color: ${({ status }) => statusColors[
    status === 'Em Trânsito' ? 'emTransito' : (status && status.toLowerCase())
  ]};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width};
  text-align: center;
`;

export default Status;
