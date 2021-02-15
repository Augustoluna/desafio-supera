import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100vw;
  border: 1 px solid red;
  overflow: auto;
`;

export const GoBackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  border: none;
  background-color: grey;
  border-radius: 10px;
  outline: none;
  margin-top: 10px;
  height: 7vh;
  width: 10vw;

  &:hover {
    background-color: steelblue;
    cursor: pointer;
  }

  &:active {
    background-color: goldenrod;
  }
`;

export const TextValuesDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 12vh;
  align-items: center;
`;
