import React from "react";
import "./Header1.css";

export const Header = () => {
    var styles = {
        // right: 0,
        display: 'flex',
        float: 'right'
        // margin: '40px'   
    }
    return (
    <div id="navbar1">
        <div id="leftNavbarColumn-1">
            <h2>ProfileSheet</h2>
        </div>
        <div id="centralNavbarColumn-1">
            {/* <h2>Central</h2> */}
        </div>
        <div id="rightNavbarColumn-1">
            {/* <div style={styles}>
                <p>Home</p>
                <p>About</p>
                <p>Services</p>
                <p>Pages</p>
                <p>Contact</p>
                <p>Projects</p>
            </div> */}
        </div>
        {/* <h2>Header of 1st template</h2> */}
    </div>
  );
};
