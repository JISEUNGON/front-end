import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { PiWarningCircleBold } from "react-icons/pi";
import { univNameList } from "../../../../components/UnvivList";
import "./UnivInput.css";

function UnivInput() {
  const [value, setText] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const onSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmit(true);
  }

  return (
        <div className="univInput">
            <div className="univHeader" style={{marginLeft: "2%", marginTop: "5%", marginBottom: "15%"}}>
                <IoIosArrowBack size="5%"/>
            </div>
            <div className="univTitle" style={{marginLeft: "4%"}}>
                <h1 style={{marginLeft: "2%", marginBottom: "7%", fontSize: "230%", fontWeight: "700"}}>매물을 확인하고 싶은<br />대학교를 입력해주세요.</h1>
            </div>
            <div className="univInputSearch" style={{marginTop: "15%"}}>
                <div className="univInputBox" style={{marginLeft: "4%", display: "flex", flexDirection: "row"}}>
                    <BsSearch size="4%" color="#BEBEBE" style={{marginLeft: "7%", marginRight: "1%", marginBottom: "-1%"}}/>
                    <form onSubmit={onSubmit}>
                      <input type="text" value={value} placeholder="학교명 검색" onChange={onChange} style={{border: "none", outline: "none", fontSize: "110%"}}/>
                    </form>
                </div>
            </div>
            <hr style={{width: "87%", marginBottom: "3%"}} color={value === "" ? "#8D8D8D" : "black"} />
            <div className="univListItems">
              {isSubmit === false ? 
                <div className="univNoti" style={{display: "flex", flexDirection: "row", marginLeft: "5%", marginTop: "6%"}}>
                  <PiWarningCircleBold color="#BEBEBE" size="3%"/>
                  <p style={{marginTop: "0", marginLeft: "2%", fontSize: "80%", color: "#8D8D8D"}}>대학생이 아니신가요?<br />해당 지역과 가장 가까운 대학을 입력해주세요!</p>
                </div>
                :
                <div className="univNotiTrue" style={{display: "flex", flexDirection: "column", marginLeft: "5%"}}>
                      {(() => {
                        const result = univNameList
                          .filter((univName) => univName.includes(value))
                          .map((univName, index) => {
                            const parts = univName.split(new RegExp(`(${value})`, 'gi'));

                            return (
                              <div className="item" key={index} style={{marginBottom: "3%"}}>
                                <p style={{marginTop: "0%", fontSize: "95%", fontWeight: "800", color: "black"}}>
                                  {parts.map((part, partIndex) =>
                                    part.toLowerCase() === value.toLowerCase()
                                      ? <span key={partIndex} style={{color: '#0EE2B0'}}>{part}</span>
                                      : <span key={partIndex}>{part}</span>
                                  )}
                                </p>
                                <hr color="#D9D9D9" style={{marginLeft: 0, width: "93%"}} />
                              </div>
                            );
                          });
                        
                        // 이후에 result 값을 반환해주면 됩니다.
                        console.log(result)
                        return result.length === 0 ? 
                          <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",  marginLeft: "-12%", marginTop: "32%"}}>
                            <PiWarningCircleBold color="#BEBEBE" size="14%"/>
                            <h1 style={{fontSize: "160%"}}>검색 결과가 없어요</h1>
                            <p>다시 한 번 검색해 보세요</p>
                          </div> : result;
                      })()}
                </div>  
              } 
            </div>
        </div>
    );
}

export default UnivInput;