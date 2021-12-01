import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core';
import { Grid, Typography } from '@mui/material'


const useStyles = makeStyles({
  imgi:{
    height: "200px",
    width: "200px",
  },
  pad:{
      padding:"2%",
  },
  maindiv:{
    align:"center",
    margin:"5%",
  }
  

});


const Card = (props) => {
  const classes = useStyles();
  return (
  
      <Grid container margin={5} className={classes.maindiv}>
      <Grid  item xs={12} md={6} lg={6}>
        <img
          
          src="https://dummyimage.com/500x300"
          alt="content"
        />
         </Grid>

        <Grid  item xs={12} md={6} lg={6}>
        <h3
          className={`tracking-widest text-${props.theme}-500 text-xs font-medium title-font`}
        >
          {props.name}
        </h3>
        <h2>
          Description
        </h2>
        <p>
          {props.desc}
        </p>
        </Grid>
        </Grid>

  );
};

function Projects1(props) {
  // const classes = useStyles();
  console.log(props.data);
  const ProjectDetails = props.data.details.projects;
  return (
    <section style={{margin:"2%"}}>
      <div >
        <Typography variant="h3" align="left" margin={5} style={{margin:"2%"}}>Projects</Typography>
        <div>
          {ProjectDetails.map((data, id)=>(
            <Card name={data.name} desc={data.description} key={id}/>
          ))}
          
        </div>
      </div>
    </section>
  );
}

Projects1.defaultProps = {
  theme: "indigo",
};

Projects1.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Projects1;
