import React from "react";
import { MainDiv, GoBackButton, CartInfos } from "./Styled";

const CartMain = ({ handleToggleCart }) => {
  const handleGoBack = () => {
    handleToggleCart(false);
  };

  return (
    <MainDiv>
      <CartInfos></CartInfos>
      <GoBackButton onClick={handleGoBack}>voltar</GoBackButton>
    </MainDiv>
  );
};

export default CartMain;
