import React, { useState } from "react";

import Header from "./components/Header/Header";
import GamesGrid from "./components/GamesGrid/GamesGrid";
import Ordenator from "./components/Ordenator/Ordenator";
import CartMain from "./components/CartMain/CartMain";

import GlobalStyle from "./styles/globalStyle";

import productsJSON from "./data/products.json";

function App() {
  const [toggleCart, setToggleCart] = useState(false);

  const [products, setProducts] = useState(
    productsJSON.sort((a, b) =>
      a.name > b.name ? 1 : a.name < b.name ? -1 : 0
    )
  );

  const [cart, setCart] = useState([]);

  const receiveSortingOption = (receivedOption) => {
    let sortedProducts = [...products].sort((a, b) =>
      a[receivedOption] > b[receivedOption]
        ? 1
        : b[receivedOption] > a[receivedOption]
        ? -1
        : 0
    );

    setProducts(sortedProducts);
  };

  const handleUpdateCart = (id, operation) => {
    let currentGame = products.find((product) => product.id === id);
    switch (operation) {
      case "add":
        setCart([...cart, currentGame]);
        break;

      default:
        break;
    }
  };

  const handleToggleCart = (toggleCartState) => {
    setToggleCart(toggleCartState);
  };

  return (
    <>
      <Header handleToggleCart={handleToggleCart} cartLength={cart.length} />

      {toggleCart ? (
        <CartMain handleToggleCart={handleToggleCart} />
      ) : (
        <>
          <Ordenator receiveSortingOption={receiveSortingOption} />

          <GamesGrid products={products} handleUpdateCart={handleUpdateCart} />
        </>
      )}

      <GlobalStyle />
    </>
  );
}

export default App;
