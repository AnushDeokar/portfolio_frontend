import React from "react";
import "./Introduction1.css";
import logo from "./img/about-us.png";
import { makeStyles } from '@material-ui/core';
import { Grid } from '@mui/material'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


const useStyles = makeStyles({
  imgi:{
     width:"50%",
     height:"auto", 
  },
  pad:{
      padding:"2%",
  }

});

export const Introduction1 = (props) => {
  const classes = useStyles();
  // console.log(props.data, "ee");
  const details = props.data.pages[0].description;
  return (
    <div id="introduction-1">

      <Grid container >
            <Grid className={classes.pad} item xs={12} md={6} lg={6}>
            <ImageList sx={{ width: 800, height: 400 }} cols={2} rowHeight={164}>
              <ImageListItem >
        
              <img src={logo} alt=""/>
                </ImageListItem>
              </ImageList>
      </Grid>

      <Grid className={classes.pad} item xs={12} md={6} lg={6}>
        <h1>My Introduction</h1>
        <p>
          {details}
        </p>
        </Grid>

      </Grid>
    </div>
  );
};
