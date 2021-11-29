import React from "react";
import logo from "./banner.jpg"
import "./Intro.css"

var styles = {
    width: '60vw', 
    height: "60vh",
    margin: "auto"
}

export const Intro = () => {
  return (
    <div id="intro-main">
      <div id="left-intro-main">
        <h1>Introducing</h1>
        <h2>Your Personalized Portfolio Creater!</h2>
        <button>Get Started</button>
      </div>
      <div id="right-intro-main">
        <img src={logo} alt="" style={styles} />
      </div>
    </div>
  );
};
