import React from "react";
import "./Header.css";

export const Header = () => {
    var styles = {
        display: 'flex',
        float: 'right'
    }
    return (
    <div id="navbar">
        <div id="leftNavbarColumn">
            <h2>ProfileSheet</h2>
        </div>
        <div id="centralNavbarColumn">
            {/* <h2>Central</h2> */}
        </div>
        <div id="rightNavbarColumn">
            <div style={styles}>
                <p>Home</p>
                <p>About</p>
                <p>Login</p>
                <p>Pages</p>
                <p>Contact</p>
                <p>Projects</p>
            </div>
        </div>
        {/* <h2>Header of 1st template</h2> */}
    </div>
  );
};
