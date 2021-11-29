import React from 'react';
import Avatar from '@mui/material/Avatar';
import { makeStyles, Typography } from '@material-ui/core';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles({
    mainDiv: {
        width: "100vw",
        height:'auto',
        paddingBottom:"30px",
        paddingTop:"0px"
    },
    subDiv:{
        justifyContent: "center",
        textAlign: "center",
        //position: "relative",
        fontFamily: "Montserrat",
        padding:"50px",
        fontSize:"20px",
    },

});
export const About = (props) =>{
    const classes = useStyles();
    const details = props.data[0].data.about;

    return(
        <div className={classes.mainDiv}>
            <div className={classes.subDiv}>
                <Typography variant="h4" style={{marginTop:"100px"}}>
                    About Me
                </Typography>

                <div style={{marginTop: "50px"}}>
                <Grid container spacing={2}>

                <Grid item xs={12} md={6} lg={6}>
                <Avatar sx={{ width: 200, height: 200 }} style={{margin: "auto"}} src="/broken-image.jpg" />
                 </Grid>

                 <Grid item xs={12} md={6} lg={6}>
                    <Typography variant="h3" style={{marginLeft:"0px"}}>
                    Hi :)</Typography><br/>
                    <Typography>
                    {details}
                    </Typography>
                    
                 </Grid>
                </Grid>

                </div>
            </div>
        </div>
    )
}