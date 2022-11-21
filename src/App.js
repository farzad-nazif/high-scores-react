import React from "react";
import styled from "styled-components";
import Card from "./Card";

function App() {
  return (
    <Main>
      <h1>Highe Scores Per Country</h1>
      <Card />
    </Main>
  );
}

const Main = styled.div`
  margin: 10rem 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-color: lightblue;
  border-style: solid;
`;
export default App;
