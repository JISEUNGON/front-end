import React, { useEffect } from "react";
import "./FootNav.css";
import { useState } from "react";
import { BiSolidHomeCircle, BiHomeCircle, BiSearch, BiSolidSearch } from "react-icons/bi"; //BiSolidHomeCircle, BiHomeCircle
import { RiAddCircleLine, RiAddCircleFill } from "react-icons/ri";
import {BsChat, BsChatFill, BsFillPersonFill, BsPerson } from "react-icons/bs";
import styled from "styled-components";

const BottomNav = styled.nav``

const HomeButton = styled.div``

const SearchButton = styled.div``

const AddButton = styled.div``

const ChattingButton = styled.div``

const MoreButton = styled.div``

function FootNav() {
  const [activeNav, setActiveNav] = useState(1);

  const handleActiveNav = (nav: number) => {
    setActiveNav(nav);
  }

  useEffect(() => {
    console.log(activeNav);
  }, [activeNav]);

  return (
    <BottomNav className="wrapper">
      <HomeButton className="navItem">
        {activeNav === 1 ? <BiSolidHomeCircle size="25" /> : <BiHomeCircle size="25" onClick={() => handleActiveNav(1)}/>}
      </HomeButton>
      <SearchButton className="navItem">
        {activeNav === 2 ? <BiSolidSearch size="25" /> : <BiSearch size="25" onClick={() => handleActiveNav(2)}/>}
      </SearchButton>
      <AddButton className="navItem">
        {activeNav === 3 ? <RiAddCircleFill size="25" /> : <RiAddCircleLine size="25" onClick={() => handleActiveNav(3)}/>}
      </AddButton>
      <ChattingButton className="navItem">
        {activeNav === 4 ? <BsChatFill size="25" /> : <BsChat size="25" onClick={() => handleActiveNav(4)}/>}
      </ChattingButton>
      <MoreButton className="navItem">
        {activeNav === 5 ? <BsFillPersonFill size="25" /> : <BsPerson size="25" onClick={() => handleActiveNav(5)}/> }
      </MoreButton>
    </BottomNav>    
  );
}

export default FootNav;