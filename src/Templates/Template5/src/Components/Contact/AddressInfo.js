import React from "react";
import { makeStyles } from "@material-ui/styles";
import LocationOn from "@mui/icons-material/LocationOn";
import {  Typography } from "@mui/material";

const useStyles = makeStyles({
  contactInformationDiv: {
    margin: "30px",
  },
  myInfoDiv: {
    margin: "20px 0px",
    backgroundColor: "white",
    padding: "10px 30px"
  },
});

export const AddressInfo = () => {
  const classes = useStyles();
  return (
    <div className={classes.myInfoDiv}>
      <div style={{ textAlign: "center" }}>
        <LocationOn
          color="primary"
          style={{
            color: "black",
            fontSize: "39px",
            margin: "15px 0px",
            backgroundColor: "#FFB400",
            borderRadius: "100%",
            padding: "10px",
          }}
        />
      </div>
      <div style={{ display: "flex", margin: "9px 0px" }}>
        <Typography variant="body2" align={"left"} style={{ flexGrow: "1"}}>
          Country:
        </Typography>
        <Typography variant="body2">India</Typography>
      </div>
      <div style={{ display: "flex", margin: "9px 0px" }}>
        <Typography variant="body2" style={{ flexGrow: "1" }}>
          City:
        </Typography>
        <Typography variant="body2">Indore</Typography>
      </div>
      <div style={{ display: "flex", margin: "9px 0px" }}>
        <Typography variant="body2" style={{ flexGrow: "1" }}>
          Street:
        </Typography>
        <Typography variant="body2">ABC In XYZ street, city</Typography>
      </div>
    </div>
  );
};
