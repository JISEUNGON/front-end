import React from "react";
import "./KakaoLogin.css"

function KakaoLogin() {
    return (
        <div className="main" style={{paddingTop: "3%"}}>
          <h1 style={{marginLeft: "5%"}}>단기 양도 자취방?<br/>단칸에서 구하자!</h1>
          <p style={{marginLeft: "5%", marginBottom: "7%"}}>한 번의 회원가입으로<br/>우리 학교 앞 자취방을 찾아보세요</p>
          <img 
            id="login_img"
            src="/images/home/login_image.png" 
            alt="login_img"
          />
          <div className="kakaoLoginDiv" style={{backgroundColor: "#FAE64C", display: "flex", flexDirection: "row", alignItems: "center", justifyContent:"center", width: "26.2%", marginLeft: "2.1%", borderRadius: "10px", position: "fixed", bottom: 0, marginBottom: "8%"}}>  
            <img 
              id="kakaoLogin"
              src="/images/login/kakao_icon.png" 
              alt="Kakao"
              onClick={() => {
                window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code&scope=openid,account_email,profile_nickname,profile_image`;
              }}
            />
            <p>카카오톡으로 시작하기</p>
          </div>
          <div style={{display: "flex", position: "fixed", bottom: 90, flexDirection: "row", width: "20%", justifyContent: "center", marginLeft: "5%"}}>
            <p id="or">또는</p>
            <p id="else"> 부동산으로 가입하기</p>
          </div>
        </div>
      );
}

export default KakaoLogin;