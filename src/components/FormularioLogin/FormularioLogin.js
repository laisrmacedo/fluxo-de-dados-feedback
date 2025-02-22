import React from "react";
import { useState } from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";

const FormularioLogin = (props) => {
  const [nome, setNome] = useState("")
  const [foto, setFoto] = useState("")

  function onChangeNome(e) {
    setNome(e.target.value)
  }
  function onChangeFoto(e) {
    setFoto(e.target.value)
  }
  const login = () => {
    props.setPageFlow(2);
    props.setDadosLogin({
      nome: nome,
      foto: foto
    })
  };

  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input type={"text"} value={nome} onChange={onChangeNome}/>
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input type={"text"} value={foto} onChange={onChangeFoto}/>
        </StyledLabel>
        <SendButton onClick={login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;
