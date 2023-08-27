import React, { useEffect } from 'react';
import './App.css';
import FootNav from './navigation/FootNav';
import styled from "styled-components";
import Routers from './Routers';

const Main = styled.div`
`;

function App() {
  useEffect(() => {
    console.log("token", window.localStorage.getItem("userInfo")); 
  }, []);
  return (
    <Main>
      <Routers />
      <FootNav/>
    </Main>
  );
}

export default App;
