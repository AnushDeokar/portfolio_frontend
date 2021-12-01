import React from 'react'
import { Typography, Grid, CardActionArea } from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
// import Button from '@mui/material/Button';
import { Posts } from './Posts';
import Card from '@mui/material/Card';

const useStyles = makeStyles({

    mainDiv: {
        width: "100vw",
        backgroundColor: '#e6e6fa',
        height: 'auto',
        minHeight:'100vh',
        
    },
    head1:{
        backgroundColor: "#7833f3",
        height: "auto",
        margin:"0",
        color:"white",
        padding:"15px",
    },
    mycard:{
        width:"80%",
        align:"center",
        margin:"20px",
        // padding:"20px",
    },
    subdiv:{
        display:'inline',
    },
    mycard2:{
        padding:"20px",
    }

});
export const CourseComponent = () => {
    const classes  = useStyles();
    // const [state, setstate] = useState(0);
    const state = 0;
return (
    <div className={classes.mainDiv}>
        <div className={classes.head1}>
            <Typography variant="h2" align="center">
                {state===0?<>Data Structures and Algorithms</>:<>Software</>}
            </Typography>
            <Typography align="center" variant="h4">
                CSL2010
            </Typography>
        </div>

        <Grid
            container 
            spacing={0}
            direction="column"
            alignItems="center"
        >


        {Posts.map((data) => (

            <Grid key = {data.id} item lg={12} >
            
            <Card className={classes.mycard} style={{ minWidth: '80vw' }}>
            <CardActionArea className={classes.mycard2} >
                <div style={{ display: "flex", justifyContent:"space-between" }}>
                    <Typography variant="h5" component="div" display="inline">
                        {data.title}
                    </Typography>
                    <Typography  component="div" display="inline">
                        {data.date}
                    </Typography>
                </div>

                <Typography component="div">
                    {data.description}
                </Typography> 

                {data.id===3?<iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'
/>:<></>}
                </CardActionArea>
            </Card>
            
            </Grid>

        ))
        }
    </Grid>


        
    </div>

)


}
