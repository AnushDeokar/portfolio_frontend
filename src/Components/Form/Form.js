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





const useStyles = makeStyles({
  btn: {
    color: "pink",
    backgroundColor: "blue",
    margin: "auto",
    "&:hover": {
      backgroundColor: "purple",
    },
  },
  title: {
    color: "blue",
    textDecoration: "underline",
  },
  field: {
    marginBottom: 20,
    // marginLeft: 20,
  }, labelc: {
    marginBottom: 20,
    marginLeft: 20,
    fontFamily: "Montserrat",
  }
});

















export const Form = () => {
  const classes = useStyles();
  const [brieftextValue, setbriefTextValue] = useState("");
  const [project, setProjectValue] = useState("");
  const [projectcounter, setProjectCounter] = useState(1);
  const [Achievementcounter, setAchievementCounter] = useState(1);

  const onbriefTextChange = (e) => setbriefTextValue(e.target.value);
  const onProjectChange = (e) => setProjectValue(e.target.value);
  const handleSubmit = () => console.log(brieftextValue);
  const handleReset = () => { setbriefTextValue(""); setProjectValue(""); }
  const handleProjectCounter = () => { setProjectCounter(projectcounter + 1); }
  const handleProjectCounter2 = () => { setProjectCounter(projectcounter - 1); }
  const handleAchievementCounter = () => { setAchievementCounter(Achievementcounter + 1); }
  const handleAchievementCounter2 = () => { setAchievementCounter(Achievementcounter - 1); }

  return (
    <div>
      <Typography
        variant="h1"
        color="secondary"
        align="center"
        gutterBottom
      >User Demo
      </Typography>
      <form>


        <Container>
        <TextField
          onChange={onbriefTextChange}
          className={classes.field}
          label="Brief Description"
          variant="outlined"
          fullWidth
          color="secondary"
          value={brieftextValue}

          required
        />


        
        <Button
          variant="contained"
          component="label"
        >
          Upload Resume
          <input
            type="file"
            hidden
          />
        </Button>



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

        
        <Button
          variant="contained"
          component="label"

        >
          Upload Profile Photo
          <input
            type="file"
            hidden
          />
        </Button>
        </Container>

        {/* PROJECT */}
        <Container>
          {/* <Typography
            color="primary"
            variant="h3"
          >
            Add Projects
          </Typography> */}
          {Array.from(Array(projectcounter), (e, i) => {
            return <Project />
          })}

          <Button
            onClick={handleProjectCounter}
            type="button"
            variant="contained"
            color="secondary"
          >Add Project</Button>

          <Button
            onClick={handleProjectCounter2}
            type="button"
            variant="outlined"
            color="secondary"
          >Remove Project
          </Button>
        </Container>

        {/* Achievement */}
        {/* {Array.from(Array(Achievementcounter), (e, i) => {
        return <Achievement/>
      })}
      <button onClick={handleAchievementCounter}type="button">Add Achievement</button>
      <button onClick={handleAchievementCounter2}type="button">Remove Achievement</button> */}



        {/* TECH STACK DESCRIPTION */}

      </form>
    </div>
  );
};