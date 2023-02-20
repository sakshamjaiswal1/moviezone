/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__left">
        <a href="" className="sidebar__options1">
          Movies
        </a>
        <a href="" className="sidebar__options1">
          Stream{" "}
        </a>{" "}
        <a href="" className="sidebar__options1">
          Events{" "}
        </a>{" "}
        <a href="" className="sidebar__options1">
          Plays{" "}
        </a>{" "}
        <a href="" className="sidebar__options1">
          Sports{" "}
        </a>{" "}
        <a href="" className="sidebar__options1">
          Activities{" "}
        </a>{" "}
        <a href="" className="sidebar__options1">
          Buzz{" "}
        </a>{" "}
      </div>{" "}
      <div className="sidebar__right">
        <a href="" className="sidebar__options2">
          ListYourShow{" "}
        </a>{" "}
        <a href="" className="sidebar__options2">
          Corporates{" "}
        </a>{" "}
        <a href="" className="sidebar__options2">
          Offers{" "}
        </a>{" "}
        <a href="" className="sidebar__options2">
          Gift Cards{" "}
        </a>{" "}
      </div>{" "}
    </div>
  );
}

export default Sidebar;
