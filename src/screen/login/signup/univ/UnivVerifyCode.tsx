import React, { useState } from "react";
import "./UnivVerifyCode.css";
import { IoIosArrowBack } from "react-icons/io";

function UnivVerifyCode(props: {universityName: string, universityEmail: string}) {
	const [value, setValue] = useState("");
	const [code, setCode] = useState("");

  const onChangeValue = (e : React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
		console.log(value)
  }

	const onChangeCode = (e : React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
		console.log(value)
  }

  return (
    <div className="univVerifyCode">
      <div className="univVerifyHeader" style={{marginTop: "5%", marginLeft: "4%", marginBottom: "13%"}}>
        <IoIosArrowBack size="5%"/>
      </div>
      <div className="univVerifyTitle" style={{marginLeft: "5%"}}>
				<h1 style={{fontSize: "230%", fontWeight: "700"}}>대학생 인증을 위해<br />이메일을 입력해주세요</h1>
      </div>
      <div>
        <p style={{marginLeft: "7%"}}>{props.universityName}</p>
				<hr style={{width: "93%"}} color="#DADADA" />
      </div>
      <div style={{display: "flex", justifyContent: "space-between", marginLeft: "6%", paddingRight: "4%"}}>
        <input type="text" value={value} placeholder="이메일 주소" onChange={onChangeValue} style={{border: "none", outline: "none", fontSize: "110%"}} />
				<p style={{color: "black", fontWeight: "700"}}>{props.universityEmail}</p>
      </div>
			<hr style={{width: "93%"}} color="#DADADA" />
			<div  style={{display: "flex", justifyContent: "space-between", marginLeft: "6%", paddingRight: "4%"}}>
				<input type="text" value={value} placeholder="인증코드 입력" onChange={onChangeCode} style={{border: "none", outline: "none", fontSize: "110%"}} />
				<p style={{color: "red", fontWeight: "700"}}>02:50</p>
			</div>
			<hr style={{width: "93%"}} color="black" />
			<div style={{display: "flex", justifyContent: "center", flexDirection: "row", marginTop: "5%", marginRight: "10%"}}>
				<p style={{fontSize: "3%"}}>이메일이 오지 않나요?</p>
				<p style={{fontSize: "3%", color: "#656565", fontWeight: "800", textDecoration: "underline", marginLeft: "2%"}}>재전송</p>
			</div>
    </div>
  );
}

export default UnivVerifyCode;