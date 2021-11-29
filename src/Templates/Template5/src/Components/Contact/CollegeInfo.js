import React from "react";
import { makeStyles } from "@material-ui/styles";
import School from "@mui/icons-material/School";
import {  Typography } from "@mui/material";

const useStyles = makeStyles({
  contactInformationDiv: {
    margin: "30px",
  },
  myInfoDiv: {
    margin: "20px 0px",
    backgroundColor: "white",
    padding: "10px 30px",
  },
});

export const CollegeInfo = () => {
  const classes = useStyles();
  return (
    <div className={classes.myInfoDiv}>
      <div style={{ textAlign: "center" }}>
        <School
          color="primary"
          style={{
            color: "black",
            fontSize: "39px",
            margin: "15px 0px",
            backgroundColor: "#FFB400",
            borderRadius: "100%",
            padding: "10px",
          }}
        />
      </div>
      <div style={{ display: "flex", margin: "9px 0px" }}>
        <Typography
          variant="body2"
          style={{ flexGrow: "1", textAlign: "left" }}
        >
          College:
        </Typography>
        <Typography variant="body2">
          Indian Institute of Technology Jodhpur
        </Typography>
      </div>
      <div style={{ display: "flex", margin: "9px 0px" }}>
        <Typography
          variant="body2"
          style={{ flexGrow: "1", textAlign: "left" }}
        >
          Degree:
        </Typography>
        <Typography variant="body2">Bachelor of Technology</Typography>
      </div>
      <div style={{ display: "flex", margin: "9px 0px" }}>
        <Typography
          variant="body2"
          style={{ flexGrow: "1", textAlign: "left" }}
        >
          Department:
        </Typography>
        <Typography variant="body2">Computer Science</Typography>
      </div>
      <div style={{ display: "flex", margin: "9px 0px" }}>
        <Typography
          variant="body2"
          style={{ flexGrow: "1", textAlign: "left" }}
        >
          Current Year of Study:
        </Typography>
        <Typography variant="body2">3rd Year</Typography>
      </div>
    </div>
  );
};
