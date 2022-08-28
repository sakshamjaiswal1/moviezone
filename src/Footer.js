import React from "react";
import "./Footer.css";
import MZ from "./MZ.png";
import fb from "./Album/fb.png";
import tw from "./Album/tw.png";
import ig from "./Album/ig.png";
import yt from "./Album/yt.png";
import pt from "./Album/pt.png";
import li from "./Album/li.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer1">
        <img src={MZ} alt="" width={50} height={50} />
      </div>
      <div className="footer2">
        <img src={fb} alt="" width={30} height={30} />
        <img src={tw} alt="" width={30} height={30} />
        <img src={ig} alt="" width={30} height={30} />
        <img src={yt} alt="" width={30} height={30} />
        <img src={pt} alt="" width={30} height={30} />
        <img src={li} alt="" width={30} height={30} />
      </div>
      <div className="footer3">
        <h6>Copyright 2022 © MovieZone Pvt. Ltd. All Rights Reserved.</h6>
      </div>
    </div>
  );
}

export default Footer;
