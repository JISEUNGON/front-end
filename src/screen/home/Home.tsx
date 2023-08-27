import React, { useEffect, useState } from "react";
import { LoginResponseDto } from "../../dto/response/login/LoginResponseDto";
import "./Home.css";

function Main() {
  const [info, setInfo] = useState<LoginResponseDto | null>(null);

  useEffect(() => {
    const userInfo = window.localStorage.getItem("userInfo");

    const info : LoginResponseDto = JSON.parse(userInfo as string);

    setInfo(info);

    console.log(info);
  }, [])
  
  return (
    <div className="main">
      {info === null ? <p>main</p> : <p>성공</p>}
    </div>
  );
}

export default Main;