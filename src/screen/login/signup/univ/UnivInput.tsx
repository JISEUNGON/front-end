import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { PiWarningCircleBold } from "react-icons/pi";
import "./UnivInput.css";

function UnivInput() {
  return (
        <div className="univInput">
            <div className="univHeader" style={{marginLeft: "2%", marginTop: "5%", marginBottom: "15%"}}>
                <IoIosArrowBack size="5%"/>
            </div>
            <div className="univTitle" style={{marginLeft: "4%"}}>
                <h1 style={{marginLeft: "2%", marginBottom: "7%", fontSize: "230%", fontWeight: "700"}}>매물을 확인하고 싶은<br />대학교를 입력해주세요.</h1>
            </div>
            <div className="univInputSearch" style={{marginTop: "15%"}}>
                <div className="univInputBox" style={{marginLeft: "4%"}}>
                    <BsSearch size="4%" color="#BEBEBE" style={{marginLeft: "7%", marginRight: "1%", marginBottom: "-1%"}}/>
                    <input type="text" placeholder="학교명 검색" style={{border: "none", fontSize: "110%"}}/>
                </div>
                <hr style={{width: "87%"}} />
                <div className="univNoti" style={{display: "flex", flexDirection: "row", marginLeft: "5%", marginTop: "6%"}}>
                    <PiWarningCircleBold color="#BEBEBE" size="3%"/>
                    <p style={{marginTop: "0", marginLeft: "2%", fontSize: "80%", color: "#8D8D8D"}}>대학생이 아니신가요?<br />해당 지역과 가장 가까운 대학을 입력해주세요!</p>
                </div>
            </div>
        </div>
    );
}

export default UnivInput;