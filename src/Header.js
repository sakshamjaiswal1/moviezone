import React from "react";
import Hamburger from "react-hamburger-menu";
import "./Header.css";
import Logo from "./MZ.png";
import SignIn from "./SignIn";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        title="Movie-Zone"
        src={Logo}
        alt="logo"
        layout="responsive"
      />

      <div className="header__left">
        <SearchIcon className="header__search" />
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
      <div className="header__right">
        <Hamburger className="header__menu" color="white" />
        </div>
      </div>
    </div>
  );
}

export default Header;
