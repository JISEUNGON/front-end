import React, { useEffect } from "react";
import "./FootNav.css";
import { useState } from "react";
import { BiSolidHomeCircle, BiHomeCircle, BiSearch, BiSolidSearch } from "react-icons/bi"; //BiSolidHomeCircle, BiHomeCircle
import { RiAddCircleLine, RiAddCircleFill } from "react-icons/ri";
import {BsChat, BsChatFill, BsFillPersonFill, BsPerson } from "react-icons/bs";

function FootNav() {
  const [activeNav, setActiveNav] = useState(1);

  const handleActiveNav = (nav: number) => {
    setActiveNav(nav);
  }

  useEffect(() => {
    console.log(activeNav);
  }, [activeNav]);

  return (
    <nav className="wrapper">
      <div>
        {activeNav === 1 ? <BiSolidHomeCircle size="25" /> : <BiHomeCircle size="25" onClick={() => handleActiveNav(1)}/>}
      </div>
      <div>
        {activeNav === 2 ? <BiSolidSearch size="25" /> : <BiSearch size="25" onClick={() => handleActiveNav(2)}/>}
      </div>
      <div>
        {activeNav === 3 ? <RiAddCircleFill size="25" /> : <RiAddCircleLine size="25" onClick={() => handleActiveNav(3)}/>}
      </div>
      <div>
        {activeNav === 4 ? <BsChatFill size="25" /> : <BsChat size="25" onClick={() => handleActiveNav(4)}/>}
      </div>
      <div>
        {activeNav === 5 ? <BsFillPersonFill size="25" /> : <BsPerson size="25" onClick={() => handleActiveNav(5)}/> }
      </div>
    </nav>    
  );
}

export default FootNav;