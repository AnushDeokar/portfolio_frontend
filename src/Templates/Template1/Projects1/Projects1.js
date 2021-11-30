import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core';
import { Grid, Typography } from '@mui/material'


// const useStyles = makeStyles({
//   imgi:{
//      width:"50%",
//      height:"auto", 
//   },
//   pad:{
//       padding:"2%",
//   }

// });


const Card = (props) => {
  return (
    <div>
      <Grid container margin={5}>
      <Grid  item xs={12} md={6} lg={6}>
        <img
          className="h-40 rounded w-full object-cover object-center mb-6"
          src="https://dummyimage.com/500x300"
          alt="content"
        />
         </Grid>

        <Grid  item xs={12} md={6} lg={6}>
        <h3
          className={`tracking-widest text-${props.theme}-500 text-xs font-medium title-font`}
        >
          SUBTITLE
        </h3>
        <h2>
          Description
        </h2>
        <p>
          Fingerstache flexitarian street art 8-bit waistcoat. Distillery
          hexagon disrupt edison bulbche.Necessitatibus dolore hic quisquam doloribus
          mollitia saepe asperiores quas praesentium, vel animi est optio ad
          ratione quis unde quibusdam iure atque soluta dignissimos porro
          repellendus ut! Distinctio, vitae! Qui dolorem error quasi enim neque
          blanditiis.
        </p>
        </Grid>
        </Grid>
    </div>
  );
};

function Projects1(props) {
  // const classes = useStyles();
  return (
    <section className="text-gray-600 body-font mr-20 ml-20">
      <div className="container px-5 py-24 mx-auto">
        <Typography variant="h3" align="left" margin={5}>Projects</Typography>
        <div className="flex flex-wrap -m-4">
          <Card />
          <Card />
          <Card />
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
