import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [pageFlow, setPageFlow] = useState(1);

  const [dadosLogin, setDadosLogin] = useState({})
  const [inputs, setInputs] = useState({})

  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header 
            dadosLogin={dadosLogin}
          />
          {pageFlow === 1 ? (
            <FormularioLogin setPageFlow={setPageFlow} 
              dadosLogin={dadosLogin}
              setDadosLogin={setDadosLogin}
            />
          ) : (
            <FormularioPostagem 
              inputs={inputs}
              setInputs={setInputs}
            />
          )}
        </aside>
        <TelaDaPostagem 
          inputs={inputs}
        />
      </Container>
    </>
  );
}

export default App;
