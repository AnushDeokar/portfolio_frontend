import React from 'react'
import Container from '@mui/material/Container';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {CourseList} from './CourseList';
import Link from '@mui/material/Link';
import { useHistory } from 'react-router';


const useStyles = makeStyles({
    mainDiv: {
        // width: "100vw",
        backgroundColor: '#e9d5a1',
        height: 'auto',
        padding:"50px",
        paddingTop: "50px"
    },
    subDiv: {
        justifyContent: "center",
        textAlign: "center",
        fontFamily: "Montserrat",
        fontSize: "20px",
    },
    mainpic: {
        margin: "10px",
    },
    year: {
        backgroundColor: "grey",
        width: "40px",
        color: "white",
        textAlign: "center",
        margin: "auto"
    },
    root: {
        display:'flex',
        justifyContent: 'space-between',
      }  

});

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  

export const Courses = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
//   const CourseList = props.data.courses;
//   console.log(CourseList, "cl");
  let history = useHistory();
//   const handleClose = () => {setOpen(false);}
    return (
        <div className={classes.mainDiv}>
            <Typography variant="h3" align="center">Courses</Typography>

            <Container>
                <Grid container spacing={3} style={{marginTop:"30px"}} >
                {CourseList.map((data) => (
                    <Grid key={data.id}  item sm={12} xs={12} md={4} lg={4}>
                    
                    <Card>
                        <CardActionArea onClick = {()=>{
                            history.push("/course", {state:data.id});
                            }} style={{minHeight:"200px"}}>
                            <CardContent>
                                
                                <Typography variant="h5" component="div" align="center">
                                {data.name}
                                </Typography>
                                <br/>
                                <Typography sx={{ mb: 1.5 }} align="center" >
                                {data.code}
                                </Typography>
                                <br />
                                
                            </CardContent>
                       
                       </CardActionArea>
                        <CardActions className={classes.root}>

                            <Button size="small">
                                <Link href={data.meet} style={{ textDecoration: 'none' }}>
                                    Meet
                                </Link>    
                            </Button>
                                
                            <Button size="small">
                                <Link href={data.classroom} style={{ textDecoration: 'none' }}>
                                    classroom
                                </Link>
                                </Button>
                        </CardActions>
                    </Card>

                            
                    </Grid> 
                ))
                }     
                </Grid>
            </Container>
        </div>


    )

}