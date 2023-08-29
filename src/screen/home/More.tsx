import React from "react";
import "./More.css";
import { FiShare } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { PiHouseSimpleLight,PiHeartStraightLight, PiChatCenteredDotsLight } from "react-icons/pi";
import { CiCircleCheck } from "react-icons/ci";
import { styled } from "styled-components";
import { useEffect } from "react";
import { LoginResponseDto } from "../../dto/response/login/LoginResponseDto";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
`;

const TopDiv = styled.div`
  background-color: #FFFFFF;
  display: flex;
  justify-content: flex-end;
  margin-top: 2%;
`;

const ProfileDiv = styled.div`
  margin-top: 2%;
  background-color: #FFFFFF;
  display: flex;
  justify-content: flex-start;
`;

const ProfileImgDiv = styled.div`
  margin-left: 5%;
`;

const ProfileInfoDiv = styled.div`
  width: 60%;
  margin-left: 0;
`;

const PointDiv = styled.div`
  justify-content: space-between;
  display: flex;
  border: 1px solid #DADADA;
  border-radius: 10px;
  margin: 3% 5% 1% 5%;
`;

const ScoreDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-right: 3%;
`;

const Number = styled.p`
  margin-right: 0;
  margin-left: 0
`;

const Point = styled.p`
  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 15px;
  margin-left: 0;
  margin-right: 0%;
  color: #0EE2B0;
`;

const ProfileImg = styled.img`
  margin-left: 5%;
`

const Name = styled.p`
  font-size: 22px;
  font-family: 'Pretendard';
  font-weight: 600;
  color: #000000;
  margin-left: 10%;
  margin-top: 5%;
  margin-bottom: 0;
`;

const University = styled.p`
  font-size: 12px;
  font-family: 'Pretendard';
  font-weight: 500;
  margin-top: 0;
  margin-left: 10%;
  color: #8D8D8D;
`;

const EventDiv = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const PointImg = styled.img`
  margin-left: 6%;
`;

const EventText = styled.p`
  font-size: 11px;
  color: red;
  margin-left: 2%;
`;

const CutLine = styled.hr`
  color: #F2F2F2;
  width: 90%;
`;

const MyButtonDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 3%;
`;

const ButtonDiv = styled.div`
  margin-left: 12%;
  width: 10%;
  justify-items: center;
`;

const ButtonText = styled.p`
  font-size: 12px;
  font-family: 'Pretendard';
  font-weight: 600;
  margin-top: 5%;
  margin-bottom: 0;
`;

const ItemDiv = styled.div`
  margin-top: 7%;
`;

const ItemTitle = styled.p`
  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 11px;
  color: #BEBEBE;
`;

const ItemCategory = styled.p`
font-family: 'Pretendard';
  font-weight: 500;
  font-size: 14px;
  color: #656565;
`;

function More() {

  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = window.localStorage.getItem("userInfo");

    const info : LoginResponseDto = JSON.parse(userInfo as string);

    if (info == null) {
      navigate('/login/kakao');
    }
  },[]);

  return (
    <Container className="main">
      <TopDiv className="share_div">
        <FiShare id="share"/>
        <AiOutlineHeart id="heart"/>
      </TopDiv>
      <ProfileDiv>  
        <ProfileImgDiv>
          <ProfileImg src="/images/more/default_profile.png" alt="default_image"/>
        </ProfileImgDiv>
        <ProfileInfoDiv>
          <Name>조랭이 떡</Name>
          <University>서울대학교</University>
        </ProfileInfoDiv>
      </ProfileDiv>
      <PointDiv>
        <p>포인트</p>
        <ScoreDiv>
          <Number>10</Number>
          <Point>P</Point>
        </ScoreDiv>
      </PointDiv>
      <EventDiv>
        <PointImg src="/images/more/point.png" alt="event"/>
        <EventText>최대 184,301</EventText>
      </EventDiv>
      <CutLine />
      <MyButtonDiv>
        <ButtonDiv>
          <PiHeartStraightLight size="30px"/>
          <ButtonText style={{marginLeft: "25%"}}>찜</ButtonText>
        </ButtonDiv>
        <ButtonDiv>
          <PiHouseSimpleLight size="30px"/>
          <ButtonText style={{marginLeft: "20%"}}>거래</ButtonText>
        </ButtonDiv>
        <ButtonDiv>
          <PiChatCenteredDotsLight size="30px"/>
          <ButtonText style={{marginLeft: "13%"}}>후기</ButtonText>
        </ButtonDiv>
        <ButtonDiv>
          <CiCircleCheck size="30px"/>
          <ButtonText style={{marginLeft: "3%", alignItems: "center"}}>본인인증</ButtonText>
        </ButtonDiv>
      </MyButtonDiv>
      <div style={{width: "100%", height: "1%", background: "#F0F0F0", marginTop: "5%"}}></div>
      <ItemDiv>
        <ItemTitle>추천</ItemTitle>
        <ItemCategory>최근 본 상품</ItemCategory>
      </ItemDiv>
      <CutLine />
      <ItemDiv>
        <ItemTitle>고객센터</ItemTitle>
        <ItemCategory>공지사항</ItemCategory>
        <ItemCategory>자주 묻는 질문</ItemCategory>
        <ItemCategory>문의하기</ItemCategory>
      </ItemDiv>
      <CutLine />
      <ItemDiv>
        <ItemTitle>기타</ItemTitle>
        <ItemCategory>계약서 가이드</ItemCategory>
        <ItemCategory>서비스 이용약관</ItemCategory>
        <ItemCategory>문의하기</ItemCategory>
      </ItemDiv>
    </Container>
  );
}

export default More;