import styled from "styled-components";

export const Container = styled.div`
  margin: 10px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 200px;

  border: 1px solid steelblue;
  border-radius: 10px;
`;

export const CardImg = styled.img`
  height: 70%;
  width: 90%;
`;

export const CardOptions = styled.div`
  display: flex;
  background-color: rgba(70, 130, 180, 0.6);
  border-radius: 10px;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 90%;

  &:hover {
    background-color: goldenrod;
    cursor: pointer;
  }

  &:active {
    background-color: gray;
  }
`;

export const AddCartIcon = styled.img`
  display: flex;
  height: 50%;
  width: 25%;
`;

export const CardTitle = styled.h3`
  display: flex;
  font-size: 16px;
`;
