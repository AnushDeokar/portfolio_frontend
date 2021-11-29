import React, { useState } from "react";
import "./Forms.css";


export const Project = ()=>{

    return (
        <div className="box">
            {/* TITLE */}
            <label for="project_title">
                Project Title
            </label>
            <input type="text">
            </input>
            <br/>


            {/* IMAGE OF PROJECT */}
            <label for="user_img">
            Project Sample Image
            </label>
            <input type="file" name="project_img" /><br/>
            


            {/* GITHUB LINK */}
            <label for="homepage">Add your github Repository Link:</label>
            <input type="url" id="homepage" name="homepage"/><br/><br/>


            
            {/* DEPPOLYED LINK */}
            <label for="homepage">Add your github Repository Link:</label>
            <input type="url" id="homepage" name="homepage"/><br/><br/>


            {/* PROJECT DESCRIPTION */}
            <label for="brief_desc">
                 Project Description
            </label>
            <textarea className="box"id="w3review" name="w3review" rows="4" cols="50">
            </textarea>
            <br/>

        </div>
    )
}