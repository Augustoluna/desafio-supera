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

export const CardTitle = styled.h3`
  display: flex;
  font-size: 16px;
`;
