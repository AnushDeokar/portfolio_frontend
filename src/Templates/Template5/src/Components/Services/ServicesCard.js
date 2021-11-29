import { Icon, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import WebIcon from "@mui/icons-material/Web";
import React from "react";

const useStyles = makeStyles({
  servicesCard: {
    padding: "20px",
    backgroundColor: "white",
    borderLeft: "2px solid #FFB400",
    margin: "15px",
    transition: "0.3s",
    "&:hover": {
      boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
      transform: "scale(1.04)",
      transition: "0.3s",
    },
  },
});

export const ServicesCard = () => {
  const classes = useStyles();
  return (
    <div className={classes.servicesCard}>
      <Icon>
        <WebIcon align={"center"} fontSize={"large"} />
      </Icon>
      <Typography variant="h6">Web Development</Typography>
      <Typography>Blog, E-Commerce</Typography>
    </div>
  );
};
