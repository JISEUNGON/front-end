import React from "react";
import "./KakaoLogin.css"

function KakaoLogin() {
    return (
        <div className="main">
          <img 
            src="/images/home/Kakao_login.png" 
            alt="Kakao"
            onClick={() => {
              window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code&scope=openid,account_email,profile_nickname,profile_image`;
            }}
          />
        </div>
      );
}

export default KakaoLogin;