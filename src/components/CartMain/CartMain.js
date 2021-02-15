import React from "react";
import { MainDiv, GoBackButton } from "./Styled";
import CartCard from "../CartCard/CartCard";

const CartMain = ({ handleToggleCart, onCartProducts }) => {
  const handleGoBack = () => {
    handleToggleCart(false);
  };

  const subTotal = onCartProducts.reduce(function (total, number) {
    return total + number.price;
  }, 0);

  const CalculateTotal = (subTotal) => {
    let total = 0;
    let shipping = (CartMain.length + 1) * 10;

    if (subTotal < 250.0) {
      total = subTotal + shipping;
    } else {
      total = subTotal;
      shipping = 0;
    }

    return { total, shipping };
  };
  return (
    <MainDiv>
      {onCartProducts.map((product) => (
        <CartCard
          key={product.id}
          id={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
        />
      ))}
      <p>
        frete:
        {CalculateTotal(subTotal).shipping.toFixed(2)}
      </p>
      <p>
        subtotal:
        {subTotal.toFixed(2)}
      </p>
      <p>
        total:
        {CalculateTotal(subTotal).total.toFixed(2)}
      </p>
      <GoBackButton onClick={handleGoBack}>voltar</GoBackButton>
    </MainDiv>
  );
};

export default CartMain;
