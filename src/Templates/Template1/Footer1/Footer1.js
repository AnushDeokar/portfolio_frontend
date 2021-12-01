import React from "react";
import { makeStyles } from '@material-ui/core';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from '@material-ui/core/Link';
const useStyles = makeStyles({
  foot:{
    backgroundColor:"#ffffff",
    align:"center",
    margin:"auto",
    textAlign:"center",
  },
  icon:{
    margin:"4px",
    color:"#000000"
  }

});

function Footer1(props) {
  const classes = useStyles();
  console.log(props.data.pages[0].data, "f");
  return (
    <footer className={classes.foot}>
      <Link href={props.data.pages[0].data.linkedin} target="_blank" >
      <LinkedInIcon className={classes.icon}/></Link>
      <Link href={props.data.pages[0].data.github} target="_blank" >
      <GitHubIcon className={classes.icon}/></Link>
      <Link href={props.data.pages[0].data.instagram} target="_blank" >
      <InstagramIcon className={classes.icon}/></Link>
    </footer>
  );
}


export default Footer1;