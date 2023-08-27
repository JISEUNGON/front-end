import React, { useEffect, useState } from 'react';
import './App.css';
import FootNav from './navigation/FootNav';
import styled from "styled-components";
import Routers from './Routers';
import { LoginResponseDto } from "./dto/response/login/LoginResponseDto";
import KakaoLogin from './screen/login/KakaoLogin';

const Main = styled.div`
`;

function App() {
  const [info, setInfo] = useState<LoginResponseDto | null>(null);

  useEffect(() => {
    const userInfo = window.localStorage.getItem("userInfo");

    const info : LoginResponseDto = JSON.parse(userInfo as string);

    setInfo(info);

    console.log(info);
  }, []);

  return (
     <>
      {info === null ? (
        <KakaoLogin />
      ) : (
        <Main>
          <Routers />
          <FootNav/>
        </Main>
      )}
    </>
  );
}

export default App;
