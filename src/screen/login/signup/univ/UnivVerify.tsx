import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import "./UnivVerify.css";

function UnivVerify() {
  return (
        <div className="univVerify">
            <div className="univVerifyHeader" style={{marginTop: "5%", marginLeft: "4%", marginBottom: "13%"}}>
                <IoIosArrowBack size="5%"/>
            </div>
            <div className="univVerifyTitle" style={{marginLeft: "5%"}}>
                <h1 style={{fontSize: "230%", fontWeight: "700"}}>대학생 인증을 하면<br />인증 마크를 얻을 수 있어요!</h1>
                <p style={{marginLeft: "0", marginBottom: "2%"}}>인증 마크가 있는 매물은</p>
                <p style={{marginLeft: "0", marginTop: "1%"}}>신뢰도가 올라가 판매율이 높아져요.</p>
            </div>
            <div className="univVerifyBody">
                <div className="univVerifyImageDiv" style={{display: "flex", justifyContent: "end", marginRight: "10%"}}>
                    <img src="/images/login/circle.png" alt="singUpImage" />
                </div>
                <div className="verifyButtonDiv" style={{position: "fixed", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", bottom: "5%", width: "30%", marginBottom: "3%"}}>
                    <div className="univVerifyButton" style={{display: "flex", justifyContent: "center", width: "90%", backgroundColor: "#27F6C5", paddingBottom: "4%", paddingTop: "4%", borderRadius: "15px", marginBottom: "5%"}}>
                        <p style={{margin: 0, color: "white", fontSize: "140%", fontWeight: "500"}}>대학생 인증하기</p>
                    </div>
                    <div className="univVerifySkipButton" style={{display: "flex", justifyContent: "center", width: "90%", paddingBottom: "4%", paddingTop: "4%", borderRadius: "15px", border: "1px solid #8D8D8D"}}>
                        <p style={{margin: 0, fontSize: "140%", fontWeight: "500", color: "#8D8D8D"}}>건너뛰기</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UnivVerify;