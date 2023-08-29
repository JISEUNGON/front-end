import React from "react";
import "./Search.css";
import { useEffect } from "react";
import { LoginResponseDto } from "../../dto/response/login/LoginResponseDto";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = window.localStorage.getItem("userInfo");

    const info : LoginResponseDto = JSON.parse(userInfo as string);

    if (info == null) {
      navigate('/login/kakao');
    }
  },[]);

  return (
    <div className="main">
      <p>search</p>
      <button onClick={() => window.localStorage.clear()}>초기화</button>
    </div>
  );
}

export default Search;