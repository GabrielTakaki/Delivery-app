import styled from 'styled-components';

export const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 20px;

  @media (min-width: 810px) {
    flex-direction: column;
    margin: 0;
  }
`;

export const ContainerProducts = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  text-align: center;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  padding: 10px;
  border-radius: 15px;
  border: 1px solid green;
  margin: 10px;
  @media (min-width: 810px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 10px 100px;
  }
`;

export const CardPrice = styled.p`
  background-color: green;
  width: 50px;
  padding: 5px;
  border-radius: 15px;
  align-self: center;
  color: #fff;
  @media (min-width: 810px) {
    background-color: green;
    color: #fff;
    padding: 10px;
    border-radius: 15px;
 }
`;

export const CardButton = styled.button`
  background-color: #fff;
  border: 1px solid green;
  font-size: calc(0.6rem + 0.6vw);
`;

export const CardInput = styled.input`
  @media (max-width: 810px) {
    width: 150px;
  }
  text-align: center;
  font-size: calc(0.6rem + 0.6vw);
  border: 1px solid green;
`;

export const CardImage = styled.img`
  height: 100px;
  width: 100px;
  @media (max-width: 810px) {
    height: 80px;
    width: 80px;
  }
`;

export const CardName = styled.h1`
  font-size: calc(0.7rem + 0.7vw);
  margin: 20px auto;
  text-align: center;
  width: 150px;
  @media (min-width: 810px) {
    font-size: calc(0.5rem + 0.5vw);
  }
`;

export const section = styled.section`
  align-items: center;
`;

export const ButtonCart = styled.button`
  position: fixed;
  right: 20px;
  bottom: 20px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid green;
  &:hover {
    transform: scale(1.1);
  }
  cursor: pointer;
`;
