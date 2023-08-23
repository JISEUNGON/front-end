import React from 'react';
import logo from './logo.svg';
import './App.css';
import FootNav from './navigation/FootNav';
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screen/home/Home';
import Search from './screen/home/Search';
import Add from './screen/home/Add';
import Chatting from './screen/home/Chatting';
import More from './screen/home/More';

const Main = styled.div`
`;

function App() {
  return (
    <Main>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/search" element={<Search/>} />
        </Routes>
        <FootNav/>
      </Router>
    </Main>
  );
}

export default App;
