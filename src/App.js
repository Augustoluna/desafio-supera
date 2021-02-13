import React, { useState } from "react";

import Header from "./components/Header/Header";
import GameCard from "./components/GameCard/GameCard";
import GamesGrid from "./components/GamesGrid/GamesGrid";
import Ordenator from "./components/Ordenator/Ordenator";
import CartMain from "./components/CartMain/CartMain";

import GlobalStyle from "./styles/globalStyle";

import productsJSON from "./data/products.json";

function App() {
  const [products, setProducts] = useState(productsJSON);
  const [sortingOption, setSortingOption] = useState("unselected");

  const receiveSortingOption = (receivedOption) => {
    setSortingOption(receivedOption);
  };

  return (
    <>
      <Header />
      {/* <CartMain /> */}
      <Ordenator receiveSortingOption={receiveSortingOption} />
      <GamesGrid>
        {productsJSON.map((product) => (
          <GameCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            score={product.score}
          />
        ))}
      </GamesGrid>

      <GlobalStyle />
    </>
  );
}

export default App;
