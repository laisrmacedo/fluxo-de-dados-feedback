import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";
import { useState } from "react";

export const FormularioCadastro = (props) => {

  const [titulo, setTitulo] = useState("");
  const [urlFoto, setUrlFoto] = useState("");
  const [descricao, setDescricao] = useState("");

  function onChangeTitulo(e) {
    setTitulo(e.target.value)
  }
  function onChangeUrlFoto(e) {
    setUrlFoto(e.target.value)
  }
  function onChangeDescricao(e) {
    setDescricao(e.target.value)
  }

  const postagem = () => {
    props.setInputs({
      titulo: titulo,
      urlFoto:urlFoto,
      descricao:descricao
    })
  };

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" value={titulo} onChange={onChangeTitulo}/>
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={urlFoto} onChange={onChangeUrlFoto}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" value={descricao} onChange={onChangeDescricao}/>
        </StyledLabel>
        <SendButton onClick={postagem}>Postar</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
