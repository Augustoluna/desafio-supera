import React from "react";
import { FiShoppingCart as CartIcon } from "react-icons/fi";

import { Container, HeaderCartBox, Title } from "./styles";

const Header = ({ cartLength, handleToggleCart }) => {
  const logoUrl =
    "https://i.pinimg.com/originals/72/3d/0a/723d0af616b1fe7d5c7e56a3532be3cd.png";

  const showCartMain = () => {
    handleToggleCart(true);
  };
  return (
    <Container>
      <img src={logoUrl} alt="" />
      <Title>SUPERA GAMES</Title>
      <HeaderCartBox onClick={showCartMain}>
        <p>My Cart</p>
        <CartIcon size={20} />
        <p>{cartLength} Items</p>
      </HeaderCartBox>
    </Container>
  );
};

export default Header;
