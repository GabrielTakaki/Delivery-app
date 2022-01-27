import styled from 'styled-components';

export const MainTable = styled.main`
  border: 1px solid #000;
  margin: 10px;
`;

export const Table = styled.table`
  width: 100%;
  margin-top: 10px;
  border-collapse: separate;
  border-spacing: 0 5px;
  border: 10px solid transparent;
`;

export const TbodyTable = styled.tbody`
  margin: 0;
`;

export const TrTable = styled.tr`
  text-align: center;
  height: calc(1.3em + 1.3vw);
`;

export const TdTable = styled.td`
  font-size: calc(0.5em + 0.5vw);
  background-color: green;
  color: white;
  border-bottom: 2px solid #000;
  &:nth-child(6) {
    width: 10%;
    background-color: red;
    cursor: pointer;
    border-radius: 0 30px 30px 0;
    &:hover {
      background-color: rgba(255, 0, 0, 0.6);
    }
  }
  &:nth-child(1) {
    background-color: green;
    border-radius: 30px 0 0 30px;
  }
  &:nth-child(2) {
    background-color: lightgray;
    color: black;
    width: 40%;
  }
  &:nth-child(3) {
    width: 5%;
    background-color: green;
  }
`;

export const ThTable = styled.th`
  font-size: calc(0.5em + 0.5vw);
  border-bottom: 10px solid transparent;
`;

export const TotalTable = styled.h3`
  display: flex;
  justify-content: flex-end;
  margin: 30px;
`;
