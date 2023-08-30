import React, { useEffect } from 'react';
import './App.css';
import styled from "styled-components";
import Routers from './Routers';
import FootNav from '../src/navigation/FootNav';
import { useLocation } from 'react-router-dom';

const Main = styled.div`
`;

function App() {
  const location = useLocation();
  
  useEffect(() => {
    console.log("token", window.localStorage.getItem("userInfo")); 
  }, []);
  return (
    <Main>
      <Routers />
      {!["/univ/signup/input", "/univ/signup/verify"].includes(location.pathname) && <FootNav />}
    </Main>
  );
}

export default App;
