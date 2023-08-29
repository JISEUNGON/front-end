import React, { useEffect } from "react";
import "./FootNav.css";
import { useState } from "react";
import { BiSearch, BiSolidSearch } from "react-icons/bi"; //BiSolidHomeCircle, BiHomeCircle
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { BsFillPersonFill, BsPerson } from "react-icons/bs";
import { GoHome, GoHomeFill } from "react-icons/go";
import { PiWechatLogoLight, PiWechatLogoFill } from "react-icons/pi";
import styled from "styled-components";
import { Link as RouterLink,useLocation } from "react-router-dom";

const BottomNav = styled.nav``

const HomeButton = styled.div``

const SearchButton = styled.div``

const AddButton = styled.div``

const ChattingButton = styled.div``

const MoreButton = styled.div``

function FootNav() {
  const location = useLocation();

  const [activeNav, setActiveNav] = useState(1);

  const handleActiveNav = (nav: number) => {
    setActiveNav(nav);
    console.log(activeNav);
  }

  useEffect(() => {
    console.log(activeNav);
  }, [activeNav]);

  if (location.pathname === "/login/kakao" || location.pathname === "/login/kakao/callback") {
    return null;
  }

  return (
    <BottomNav className="wrapper">
      <HomeButton className="navItem">
        <RouterLink to="/" color="#FFFFFF">
          {activeNav === 1 ? <GoHomeFill color="#000" size="25" /> : <GoHome color="#000" size="25" onClick={() => handleActiveNav(1)}/>}
        </RouterLink>
      </HomeButton>
      <AddButton className="navItem">
        <RouterLink to="/interest">
          {activeNav === 2 ? <AiTwotoneHeart color="#000" size="25" /> : <AiOutlineHeart color="#000" size="25" onClick={() => handleActiveNav(2)}/>}
        </RouterLink>
      </AddButton>
      <SearchButton className="navItem">
        <RouterLink to="/search">
          {activeNav === 3 ? <BiSolidSearch color="#000" size="25" /> : <BiSearch color="#000" size="25" onClick={() => handleActiveNav(3)}/>}
        </RouterLink>
      </SearchButton>
      <ChattingButton className="navItem">
        <RouterLink to="/chatting">
          {activeNav === 4 ? <PiWechatLogoFill color="#000" size="25" /> : <PiWechatLogoLight color="#000" size="25" onClick={() => handleActiveNav(4)}/>}
        </RouterLink>
      </ChattingButton>
      <MoreButton className="navItem">
        <RouterLink to="/more">
          {activeNav === 5 ? <BsFillPersonFill color="#000" size="25" /> : <BsPerson color="#000" size="25" onClick={() => handleActiveNav(5)}/> }
        </RouterLink>
      </MoreButton>
    </BottomNav>    
  );
}

export default FootNav;