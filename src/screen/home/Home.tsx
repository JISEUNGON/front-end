import React, { useEffect, useState,useContext } from "react";
import { LoginResponseDto } from "../../dto/response/login/LoginResponseDto";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Main() {
  const [info, setInfo] = useState<LoginResponseDto | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = window.localStorage.getItem("userInfo");

    const info : LoginResponseDto = JSON.parse(userInfo as string);

    setInfo(info);

    console.log(info);

    if (info == null) {
      navigate('/login/kakao');
    }

  }, [])
  
  return (
    <div className="main">
      {info === null ? <p>main</p> : <p>성공</p>}
    </div>
  );
}

export default Main;