import { Grid, Typography, Icon } from "@mui/material";
import React from "react";
import { ServicesCard } from "./ServicesCard";
import { makeStyles } from "@material-ui/styles";
import WebIcon from "@mui/icons-material/Web";
import StorageIcon from '@mui/icons-material/Storage';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';

const myServices = [
  {
    name: "Front End",
    desc: "ReactJS, MaterialUI",
    logo: <WebIcon color="primary" style={{fontSize: "80px"}} />,
  },
  {
    name: "Back End",
    desc: "Django, NodeJS",
    logo: <StorageIcon color="primary" style={{fontSize: "80px"}} />,
  },
  {
    name: "Machine Learning",
    desc: "Keras, Tensorflow",
    logo: <WebIcon color="primary" style={{fontSize: "80px"}} />,
  },
  {
    name: "IoT",
    desc: "NodeMCU, Arduino",
    logo: <WebIcon color="primary" style={{fontSize: "80px"}} />,
  },
  {
    name: "Game Development",
    desc: "Pygame",
    logo: <WebIcon color="primary" style={{fontSize: "80px"}} />,
  },
  {
    name: "Computer Vision",
    desc: "OpenCV, YOLO",
    logo: <ImportantDevicesIcon color="primary" style={{fontSize: "80px"}} />,
  },
];

const useStyles = makeStyles({
  servicesCard: {
    padding: "25px",
    backgroundColor: "white",
    borderLeft: "2px solid #FFB400",
    margin: "15px",
    textAlign: "center",
    transition: "0.3s",
    "&:hover": {
      boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
      transform: "scale(1.04)",
      transition: "0.3s",
    },
  },
});

export const Services = (props) => {
  const classes = useStyles();
  const myservice = props.data.skills;
  // console.log(props.data.skills);
  return (
    <div>
      <Typography variant="h3">Interests</Typography>
      <Grid container id="servicesDiv">
        {myservice.map((data, index) => (
          <Grid key={index} item xs={12} md={4} lg={4}>
            <div className={classes.servicesCard}>
              {myServices[index].logo}
              <Typography
                align={"center"}
                variant="h5"
                style={{
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                  fontSmoothing: "antialiased",
                }}
              >
                {data.name}
              </Typography>
              <Typography
                align={"center"}
                color="textSecondary"
                variant="body2"
              >
                {/* {data.desc} */}
              </Typography>
            </div>
          </Grid>
        ))}
<Grid item xs={12} md={4} lg={4}>
<div className={classes.servicesCard}>
              {myServices[5].logo}
              <Typography
                align={"center"}
                variant="h5"
                style={{
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                  fontSmoothing: "antialiased",
                }}
              >
                Machine Learning
              </Typography>
              <Typography
                align={"center"}
                color="textSecondary"
                variant="body2"
              >
                {/* {data.desc} */}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
          <div className={classes.servicesCard}>
              {myServices[5].logo}
              <Typography
                align={"center"}
                variant="h5"
                style={{
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                  fontSmoothing: "antialiased",
                }}
              >
                Deep Learning
              </Typography>
              <Typography
                align={"center"}
                color="textSecondary"
                variant="body2"
              >
                {/* {data.desc} */}
              </Typography>
            </div>
          </Grid>
      </Grid>
    </div>
  );
};
