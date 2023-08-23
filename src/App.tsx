import React from 'react';
import logo from './logo.svg';
import './App.css';
import FootNav from './navigation/FootNav';
import styled from "styled-components";

const Main = styled.div`
`;

function App() {
  return (
    <Main className="App">
      <FootNav />
    </Main>
  );
}

export default App;
