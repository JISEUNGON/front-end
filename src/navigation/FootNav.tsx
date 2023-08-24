import React, { useEffect } from "react";
import "./FootNav.css";
import { useState } from "react";
import { BiSolidHomeCircle, BiHomeCircle, BiSearch, BiSolidSearch } from "react-icons/bi"; //BiSolidHomeCircle, BiHomeCircle
import { RiAddCircleLine, RiAddCircleFill } from "react-icons/ri";
import {BsChat, BsChatFill, BsFillPersonFill, BsPerson } from "react-icons/bs";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

const BottomNav = styled.nav``

const HomeButton = styled.div``

const SearchButton = styled.div``

const AddButton = styled.div``

const ChattingButton = styled.div``

const MoreButton = styled.div``

const StyledLink = styled(RouterLink)`
  backgroud-color: transparent;
`;

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
        <RouterLink to="/">
          {activeNav === 1 ? <BiSolidHomeCircle size="25" /> : <BiHomeCircle size="25" onClick={() => handleActiveNav(1)}/>}
        </RouterLink>
      </HomeButton>
      <SearchButton className="navItem">
        <RouterLink to="/search">
          {activeNav === 2 ? <BiSolidSearch size="25" /> : <BiSearch size="25" onClick={() => handleActiveNav(2)}/>}
        </RouterLink>
      </SearchButton>
      <AddButton className="navItem">
        <RouterLink to="/add">
          {activeNav === 3 ? <RiAddCircleFill size="25" /> : <RiAddCircleLine size="25" onClick={() => handleActiveNav(3)}/>}
        </RouterLink>
      </AddButton>
      <ChattingButton className="navItem">
        <RouterLink to="/chatting">
          {activeNav === 4 ? <BsChatFill size="25" /> : <BsChat size="25" onClick={() => handleActiveNav(4)}/>}
        </RouterLink>
      </ChattingButton>
      <MoreButton className="navItem">
        <RouterLink to="/more">
          {activeNav === 5 ? <BsFillPersonFill size="25" /> : <BsPerson size="25" onClick={() => handleActiveNav(5)}/> }
        </RouterLink>
      </MoreButton>
    </BottomNav>    
  );
}

export default FootNav;