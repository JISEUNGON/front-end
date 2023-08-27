import React from "react";
import "./KakaoLogin.css"

function KakaoLogin() {
    return (
        <div className="main">
          <h4>단기 양도 자취방?<br/>단칸에서 구하자!</h4>
          <p>한 번의 회원가입으로<br/>우리 학교 앞 자취방을 찾아보세요</p>
          <img 
            id="login_img"
            src="/images/home/login_image.png" 
            alt="login_img"/>
          <img 
            id="kakao_login"
            src="/images/home/Kakao_login.png" 
            alt="Kakao"
            onClick={() => {
              window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code&scope=openid,account_email,profile_nickname,profile_image`;
            }}
          />
          <img 
            id="google_login"
            src="/images/home/google_login.png"
            alt="google_login"
          />
          <p id="or">또는</p>
          <p id="else"> 부동산으로 가입하기</p>
        </div>
      );
}

export default KakaoLogin;