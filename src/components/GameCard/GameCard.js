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

const GameCard = ({ id, image, name, price, handleUpdateCart }) => {
  const handleAddToCart = () => {
    console.log("Add to cart clicked");

    handleUpdateCart(id, "add");
  };

  return (
    <Container>
      <CardImg src={require(`../../assets/${image}`).default} alt={image} />
      <CardTitle>{name}</CardTitle>
      <p>R$ {price}</p>
      <CardOptions>
        <AddCartIcon
          src={cartIcon}
          alt="adicionar no carrinho"
          onClick={handleAddToCart}
        />
        <RemoveCartIcon src={arrowDown} alt="remover do carrinho " />
      </CardOptions>
    </Container>
  );
};

export default GameCard;
