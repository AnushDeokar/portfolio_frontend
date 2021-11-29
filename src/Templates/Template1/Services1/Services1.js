import React from "react";
import "./Services1.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { makeStyles } from '@material-ui/core';
import { Grid, Typography } from '@mui/material'


const useStyles = makeStyles({
  imgi:{
     width:"50%",
     height:"auto", 
  },
  pad:{
      margin:"5%",
      padding:"2%",
  }

});

const MyCard = () => {
  const classes = useStyles();
    return (
      <div className={classes.pad}>
        <Card margin={5} padding={5} sx={{ minWidth: 275 }}>
          <CardContent>
            <h1><i className="fas fa-archway"></i></h1>
            <h2>Web Developer</h2>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem modi quod
            nisi optio? Et minus atque ab, maiores saepe assumenda quis?
            </p>
          </CardContent>
        </Card>
      </div>
    );
};

export const Services1 = () => {
  return (
    <div id="services1">
      <Typography variant="h3" margin={5}>Services Offers</Typography>
      <div >
        <Grid container>
        <Grid item xs={12} md={6} lg={4}><MyCard /></Grid>
        <Grid item xs={12} md={6} lg={4}><MyCard /></Grid>
        <Grid item xs={12} md={6} lg={4}><MyCard /></Grid>
        </Grid>
      </div>
    </div>
  );
};
