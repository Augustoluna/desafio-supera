import React, { useState, useEffect } from "react";
import { OrdenatorMainDiv, OrdenatorLabel, OrdenatorSelect } from "./Styled";

const Ordenator = ({ receiveSortingOption }) => {
  const [Option, setOption] = useState("");

  const handleSelect = (event) => {
    setOption(event.target.value);
    receiveSortingOption(event.target.value);
  };
  //   useEffect(() => {
  //     handleSorting(sortingOption);
  //     console.log(sortingOption);
  //   }, [sortingOption, handleSorting]);

  return (
    <OrdenatorMainDiv>
      <OrdenatorLabel>Ordenar produtos por: </OrdenatorLabel>
      <OrdenatorSelect onChange={handleSelect}>
        <option value={"preco"}>Preço</option>
        <option value={"popularidade"}>Popularidade</option>
        <option value={"alfabetica"}>Ordem Alfabética</option>
      </OrdenatorSelect>
    </OrdenatorMainDiv>
  );
};

export default Ordenator;
