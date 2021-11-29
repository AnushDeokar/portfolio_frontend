import React from "react";
import { makeStyles } from '@material-ui/core';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
const useStyles = makeStyles({
  foot:{
    backgroundColor:"#e6e6fa",
    align:"center",
    margin:"auto",
    textAlign:"center",
  },
  icon:{
    margin:"4px",
  }

});

function Footer1(props) {
  const classes = useStyles();
  return (
    <footer className={classes.foot}>
      <LinkedInIcon className={classes.icon}/>
      <GitHubIcon className={classes.icon}/>
      <InstagramIcon className={classes.icon}/>
    </footer>
  );
}


export default Footer1;