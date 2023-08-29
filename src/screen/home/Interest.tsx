import React from "react";
import { useEffect } from "react";
import { LoginResponseDto } from "../../dto/response/login/LoginResponseDto";
import { useNavigate } from "react-router-dom";
import "./Interest.css";

export default function Interest() {

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
            <h1>Interest</h1>
        </div>
    );
}