import React from "react";
import cartIcon from "../../assets/cart-icon.svg";
import arrowDown from "../../assets/arrow-down-icon.svg";
import {
  Container,
  CardImg,
  CardOptions,
  AddCartIcon,
  RemoveCartIcon,
  CardTitle,
} from "./styles";

const GameCard = ({ image, name, price }) => {
  return (
    <Container>
      <CardImg src={require(`../../assets/${image}`).default} alt={image} />
      <CardTitle>{name}</CardTitle>
      <p>R$ {price}</p>
      <CardOptions>
        <AddCartIcon src={cartIcon} alt="adicionar no carrinho" />
        <RemoveCartIcon src={arrowDown} alt="remover do carrinho " />
      </CardOptions>
    </Container>
  );
};

export default GameCard;
