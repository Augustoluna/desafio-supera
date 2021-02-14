import React from "react";
import { OrdenatorMainDiv, OrdenatorLabel, OrdenatorSelect } from "./Styled";

const Ordenator = ({ receiveSortingOption }) => {
  const handleSelect = (event) => {
    receiveSortingOption(event.target.value);
  };

  return (
    <OrdenatorMainDiv>
      <OrdenatorLabel>Ordenar produtos por: </OrdenatorLabel>
      <OrdenatorSelect name="ordenar" onChange={handleSelect}>
        <option value="name">Ordem Alfabética</option>
        <option value="price">Preço</option>
        <option value="score">Popularidade</option>
      </OrdenatorSelect>
    </OrdenatorMainDiv>
  );
};

export default Ordenator;
