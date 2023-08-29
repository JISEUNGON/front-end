import React, { useEffect } from 'react';
import './App.css';
import styled from "styled-components";
import Routers from './Routers';
import FootNav from '../src/navigation/FootNav';

const Main = styled.div`
`;

function App() {
  useEffect(() => {
    console.log("token", window.localStorage.getItem("userInfo")); 
  }, []);
  return (
    <Main>
      <Routers />
      <FootNav />
    </Main>
  );
}

export default App;
