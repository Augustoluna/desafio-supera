import React, { useState, useEffect } from "react";
import { OrdenatorMainDiv, OrdenatorLabel, OrdenatorSelect } from "./Styled";

const Ordenator = ({ handleSorting }) => {
  const [sortingOption, setSortingOption] = useState("");

  const handleSelect = (event) => {
    setSortingOption(event.target.value);
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
