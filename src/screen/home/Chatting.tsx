import React from "react";
import { useEffect } from "react";
import { LoginResponseDto } from "../../dto/response/login/LoginResponseDto";
import { useNavigate } from "react-router-dom";
import "./Chatting.css";

function Chatting() {
  
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = window.localStorage.getItem("userInfo");

    const info : LoginResponseDto = JSON.parse(userInfo as string);

    if (info == null) {
      navigate('/login/kakao');
    }
  },[navigate]);

  return (
    <div className="main">
      <p>Chatting</p>
    </div>
  );
}

export default Chatting;