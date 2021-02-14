import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  border: 1 px solid red;
`;

export const GoBackButton = styled.button`
  display: flex;
  justify-content: center;
  border: none;
  background-color: grey;
  border-radius: 10px;
  width: 10vw;
`;

export const CartInfos = styled.div`
  display: flex;
  height: 60vh;
  width: 25vw;
  border-radius: 10px;
  background-color: steelblue;
  margin: 10px;
`;
