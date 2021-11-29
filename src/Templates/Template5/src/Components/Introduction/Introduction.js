import React from "react";
import { makeStyles } from "@material-ui/styles";
// import { Grid, Typography } from "@mui/material";
// import logo from "./man-img.png";
import "./Introduction.css";
import Particles from "react-particles-js";
import { Box } from "@mui/system";

const useStyles = makeStyles({
  introDiv: {
    backgroundColor: "white",
    margin: "0px 15px",
    height: "500px",
  },
});

// const style = {
//   left:
// }

export const Introduction = (props) => {
  const classes = useStyles();
  const details = props.data;
  const name = details.pages[0].data.name;
  const brief = details.pages[0].data.brief;
  return (
    <div className={classes.introDiv}>
      <div style={{ position: "absolute" }}>
        <Box sx={{
          display: ""
        }} style={{ margin: "auto" }}>
          <h1
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "3.7rem",
              color: "#2B2B2B",
            }}
          >
            I'm {name}
          </h1>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "2.2rem",
              color: "#FFB400",
              fontWeight: "bold",
              lineHeight: "0rem",
            }}
          >
            {brief}
          </p>
        </Box>
      </div>
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#FFB400",
            },
            line_linked: {
              color: "#FFB400",
              opacity: 1,
            },
          },
        }}
      />
    </div>
  );
};
