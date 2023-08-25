import React from 'react';
import './App.css';
import FootNav from './navigation/FootNav';
import styled from "styled-components";
import Routers from './Routers';

const Main = styled.div`
`;

function App() {
  return (
    <Main>
      <Routers />
      <FootNav/>
    </Main>
  );
}

export default App;
