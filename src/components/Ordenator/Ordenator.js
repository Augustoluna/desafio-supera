import React from "react";
import { OrdenatorMainDiv, OrdenatorLabel, OrdenatorSelect } from "./Styled";

const Ordenator = () => {
  return (
    <OrdenatorMainDiv>
      <OrdenatorLabel>Ordenar produtos por: </OrdenatorLabel>
      <OrdenatorSelect>
        <option value={"Preço"}>Preço</option>
        <option value={"Popularidade"}>Popularidade</option>
        <option value={"Ordem Alfabética"}>Ordem Alfabética</option>
      </OrdenatorSelect>
    </OrdenatorMainDiv>
  );
};

export default Ordenator;
