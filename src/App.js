import Header from "./components/Header/Header";
import GameCard from "./components/GameCard/GameCard";

import products from "./data/products.json";

function App() {
  return (
    <>
      <Header />
      {products.map((product) => (
        <GameCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          score={product.score}
        />
      ))}
    </>
  );
}

export default App;
