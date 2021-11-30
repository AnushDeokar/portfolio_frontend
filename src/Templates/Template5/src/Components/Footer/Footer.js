import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@mui/material";

const useStyles = makeStyles({
  footerDiv: {
    // marginLeft: "calc(280px + 20px)",
    // marginRight: "calc(70px + 20px)",
    marginTop: "30px",
    backgroundColor: "white",
    minWidth:"80%",
    align:"center",
    padding: "10px",
    left: "0px",
    bottom: "0px",
    position: "fixed",
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
