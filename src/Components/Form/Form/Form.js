// import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { Button, Paper, Typography } from "@material-ui/core";
import { Project } from "./Project";
import { Achievement } from "./Achievement";
import "./Forms.css";
import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { FormControl } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { FormLabel } from "@material-ui/core";























export const Form = () => {
  const [brieftextValue, setbriefTextValue] = useState("");
  const [project, setProjectValue] = useState("");
  const [projectcounter, setProjectCounter] = useState(1);
  const [Achievementcounter, setAchievementCounter] = useState(1);

  const onbriefTextChange = (e) => setbriefTextValue(e.target.value);
  const onProjectChange = (e) => setProjectValue(e.target.value);
  const handleSubmit = () => console.log(brieftextValue);
  const handleReset = () => {setbriefTextValue("");setProjectValue("");}
  const handleProjectCounter = ()=>{setProjectCounter(projectcounter+1);}
  const handleProjectCounter2 = ()=>{setProjectCounter(projectcounter-1);}
  const handleAchievementCounter = ()=>{setAchievementCounter(Achievementcounter+1);}
  const handleAchievementCounter2 = ()=>{setAchievementCounter(Achievementcounter-1);}

  return (
      <div>
        <Typography 
        variant="h1"
        color="secondar"
        align="center"
        gutterBottom
        >User Demo</Typography> 
    {/* <form>
      <label for="brief_desc">
          Brief Description
      </label>
      <textarea className="box"id="w3review" name="w3review" rows="4" cols="50">
      </textarea>
      <br/> */}


      {/* IMAGE */}
      {/* <label for="user_img">
          User Image
      </label>
      <input type="file" name="user_img" /><br/> */}



      {/* RESUME */}
      {/* <label for="Resume">
          Resume
      </label>
      <input type="file" name="user_resume" /><br/>


       */}


      {/* PROJECT */}
      {/* {Array.from(Array(projectcounter), (e, i) => {
        return <Project/>
      })}
      <button onClick={handleProjectCounter}type="button">Add Project</button>
      <button onClick={handleProjectCounter2}type="button">Remove Project</button>
 */}


      {/* Achievement */}
      {/* {Array.from(Array(Achievementcounter), (e, i) => {
        return <Achievement/>
      })}
      <button onClick={handleAchievementCounter}type="button">Add Achievement</button>
      <button onClick={handleAchievementCounter2}type="button">Remove Achievement</button> */}



      {/* TECH STACK DESCRIPTION */}
      
    {/* </form> */}
    </div>
  );
};