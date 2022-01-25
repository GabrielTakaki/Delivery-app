import styled from 'styled-components';

export const SectionHeader = styled.section`
  display: flex;
  align-items: center;
  height: 100%;
  width: 40%;
  &:nth-child(2) {
    justify-content: flex-end;
    align-items: end;
  }
`;

export const ButtonHeader = styled.button`
  height: 50px;
  max-width: 300px;
  width: 100%;
  cursor: pointer;
  border: none;
  color: #fff;
  font-size: calc(0.5em + 0.5vw);
  background-color: transparent;
  font-weight: bold;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const NavHeader = styled.nav`
  display: flex;
  // flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const HeaderComponent = styled.header`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  background-color: green;
`;
