import styled from "styled-components";

export const Container = styled.div`
  height: 10vh;
  padding: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: steelblue;
  img {
    border-radius: 10px;
    height: 70px;
  }
`;

export const HeaderCartBox = styled.div`
  display: flex;
  align-items: center;
  color: steelblue;
  background-color: white;
  border: 1px solid steelblue;
  border-radius: 10px;

  padding: 10px;

  p {
    margin-right: 15px;
  }

  &:hover {
    cursor: pointer;
    background-color: grey;
    color: white;
  }

  &:active {
    background-color: goldenrod;
  }
`;

export const Title = styled.h2`
  display: flex;
  font-size: 40px;
  justify-content: center;
  border: 3px solid white;
  border-radius: 10px;
  width: 25vw;
`;
