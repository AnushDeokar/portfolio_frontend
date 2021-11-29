import React, { useState } from "react";
import "./Forms.css";


export const Achievement = ()=>{

    return (
        <div className="box">
            {/* TITLE */}
            <label for="project_title">
                Achievement Title
            </label>
            <input type="text">
            </input>
            <br/>
            


            {/* Achievement DESCRIPTION */}
            <label for="brief_desc">
                 Achievement Description
            </label>
            <textarea className="box"id="w3review" name="w3review" rows="4" cols="50">
            </textarea>
            <br/>

        </div>
    )
    }