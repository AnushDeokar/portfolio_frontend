import React from 'react'
import Container from '@mui/material/Container';
import { Grid, makeStyles, Typography } from '@material-ui/core';
// import { ProjectDetails } from './ProjectDetails';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
// import { useRef } from 'react';
// import { ModalComponent } from './ModalComponent';
import logo from '../../../Images/imgalt.PNG'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const useStyles = makeStyles({
    mainDiv: {
        width: "100vw",
        backgroundColor: '#e9d5a1',
        height: 'auto',
        paddingTop: "50px",
        paddingBottom:"0px",
        marginBottom:"0px",

    },
    subDiv: {
        justifyContent: "center",
        textAlign: "center",
        // position: "relative",
        fontFamily: "Montserrat",
        fontSize: "20px",
    },
    mainpic: {
        margin: "10px",
        marginBottom:"0px",
    },
    year: {
        backgroundColor: "grey",
        width: "40px",
        color: "white",
        textAlign: "center",
        margin: "auto"
    },
    photo:{
        aspectRatio:"3/2"
    }
});



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

// console.log(ProjectDetails);




export const Projects = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    
    const ProjectDetails = props.data.details.projects;
    console.log(ProjectDetails, "p");
    const handleClose = () => {setOpen(false);}
//   const handleClose = () => {setOpen(false);}
    return (
        <div className={classes.mainDiv}>
            <Typography variant="h3" align="center">Projects</Typography>

            <Container>
                <Grid container spacing={3} style={{marginTop:"30px"}}>
                    {ProjectDetails.map((data) => (    
                        <Grid key={data.id} item sm={12} xs={12} md={4} lg={4}>
                            <Card className={classes.ourcard}>
                                <CardActionArea onClick={handleOpen}>
                                    {data.img!=null? 
                                    <CardMedia
                                        className={classes.mainpic}
                                        component="img"
                                        height="140"
                                        image={data.img}
                                        alt={logo}
                                    />: 
                                    <CardMedia
                                        // className={classes.mainpic}
                                        className={classes.photo}
                                        component="img"
                                        height="140"
                                        image={logo}
                    
                                    />
                                        
                                    }

                                    <CardContent>
                                        <Typography className={classes.year}>
                                            {data.year}
                                        </Typography>
                                        <Typography align="center" style={{marginTop:"7px"}} variant="h5">
                                            {data.name}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                            
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                                key={data.id}

                            >
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        {data.name}
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        {data.description}
                                    </Typography>
                                </Box>
                            </Modal>            
                            
                        </Grid>    
                    ))
                    }
                </Grid>
            </Container>
        </div>


    )

}