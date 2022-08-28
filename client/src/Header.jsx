import React from "react";
import "./Header.css";
import Logo from "./MZ.png";
import SignIn from "./SignIn";
import searchIcon from './Album/searchIcon.svg'

function Header() {
  console.log(searchIcon)
  
  return (
    <div className="header">
     
      <div className="header_inital_con" >
      <img
        className="header__logo"
        title="Movie-Zone"
        src={Logo}
        alt="logo"
        layout="responsive"
      />
      </div>
     

      <div className="header__left">
     <img src={searchIcon}  className='searchIcon' alt="" />
        <input
          type="text"
          placeholder="Search for Movies,Events,Plays,Sports and Activities"
        />
      </div>

      <div className="header__right">
        <div className="header__location">
          <h3>India</h3>
        </div>
        <SignIn />
        
      <div className="header__menuCon">
        <div className="header_menuBar" ></div>
        <div className="header_menuBar" ></div>
        <div className="header_menuBar" ></div>

     
        
        </div>
      </div>
    </div>
  );
}

export default Header;
