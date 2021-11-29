import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@mui/material";

const useStyles = makeStyles({
  footerDiv: {
    marginLeft: "calc(280px + 20px)",
    marginRight: "calc(70px + 20px)",
    marginTop: "30px",
    backgroundColor: "white",
    padding: "10px",
    left: "0px",
    bottom: "0px",
    position: "relative",
  },
});

export const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footerDiv}>
        <Typography variant="body1" style={{textAlign: "center"}}>&copy; 2021 All Rights Reserved @Anush Deokar</Typography>
    </div>
  );
};
