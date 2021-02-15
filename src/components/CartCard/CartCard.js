import React from "react";
import { Container, CardImg, CardTitle } from "./Styled";

const CartCard = ({ image, name, price }) => {
  return (
    <Container>
      <CardImg src={require(`../../assets/${image}`).default} alt={image} />
      <CardTitle>{name}</CardTitle>
      <p>R$ {price}</p>
    </Container>
  );
};

export default CartCard;
