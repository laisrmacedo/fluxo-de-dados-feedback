import React from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = (props) => {

  return (
    <ContainerPostagem>
      <TitleHeader>{props.inputs.titulo}</TitleHeader>
      <Image src={props.inputs.urlFoto} />
      <Description>{props.inputs.descricao}</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;
