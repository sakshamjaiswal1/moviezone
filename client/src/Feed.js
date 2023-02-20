import React from "react";
import "./Feed.css";
import A1 from "./Album/A1.jpg";
import A2 from "./Album/A2.jpg";
import A3 from "./Album/A3.jpg";
import A4 from "./Album/A4.jpg";
import A5 from "./Album/A5.jpg";

function Feed() {
  return (
    
    <div className="feed">
   
      <div className="post">
        <img src={A1} alt="" width={240} height={360} title="Liger" />
        <h4>Liger</h4>
      </div>
      <div className="post">
        <img src={A2} alt="" width={240} height={360} title="Karthikeya" />
        <h4>Karthikeya</h4>
      </div>
      <div className="post">
        <img src={A3} alt="" width={240} height={360} title="DragonBall" />
        <h4>DragonBall</h4>
      </div>
      <div className="post">
        <img src={A4} alt="" width={240} height={360} title="RakshaBandhan" />
        <h4>RakshaBandhan</h4>
      </div>
      <div className="post">
        <img
          src={A5}
          alt=""
          width={240}
          height={360}
          title="Laal Singh Chaddha"
        />
        <h4>Laal Singh Chaddha</h4>
      </div>
    </div>
  );
}

export default Feed;
