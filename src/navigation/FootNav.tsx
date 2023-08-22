import React from "react";
import "./FootNav.css";
import { useState } from "react";
import { BiSolidHomeCircle, BiHomeCircle, BiSearch, BiSolidSearch } from "react-icons/bi"; //BiSolidHomeCircle, BiHomeCircle
import { RiAddCircleLine, RiAddCircleFill } from "react-icons/ri";
import {BsChat, BsChatFill, BsFillPersonFill, BsPerson } from "react-icons/bs";

function FootNav() {
  const [home, setHome] = useState(true);
  const [search, setSearch] = useState(false);
  const [add, setAdd] = useState(false);
  const [chatting, setChatting] = useState(false);
  const [more, setMore] = useState(false);

  const homeClick = () => {
    setHome((current) => !current);
    setSearch(false);
    setAdd(false);
    setChatting(false);
    setMore(false);
  };

  const searchClick = () => {
    setSearch((current) => !current);
    setHome(false);
    setAdd(false);
    setChatting(false);
    setMore(false);
  };

  const addClick = () => {
    setAdd((current) => !current);
    setSearch(false);
    setHome(false);
    setChatting(false);
    setMore(false);
  };

  const chattingClick = () => {
    setChatting((current) => !current);
    setSearch(false);
    setAdd(false);
    setHome(false);
    setMore(false);
  };

  const moreClick = () => {
    setMore((current) => !current);
    setSearch(false);
    setAdd(false);
    setChatting(false);
    setHome(false);
  };

  return (
    <nav className="wrapper">
      <div>
        {home === true ? <BiSolidHomeCircle className="home" size="25" onClick={homeClick}/> : <BiHomeCircle className="home" size="25" onClick={homeClick}/>}
      </div>
      <div>
        {search === true ? <BiSolidSearch className="search" size="25" onClick={searchClick}/> : <BiSearch className="search" size="25" onClick={searchClick}/>}
      </div>
      <div>
        {add === true ? <RiAddCircleFill className="add" size="25" onClick={addClick}/> : <RiAddCircleLine className="add" size="25" onClick={addClick}/>}
      </div>
      <div>
        {chatting === true ? <BsChatFill className="chatting" size="25" onClick={chattingClick}/> : <BsChat className="chatting" size="25" onClick={chattingClick}/>}
      </div>
      <div>
        {more === true ? <BsFillPersonFill className="more" size="25" onClick={moreClick}/> : <BsPerson className="more" size="25" onClick={moreClick}/> }
      </div>
    </nav>    
  );
}

export default FootNav;