import React from "react";
import { makeStyles } from "@material-ui/styles";
import { AddressInfo } from "./AddressInfo";
import { EmailInfo } from "./EmailInfo";
import { CollegeInfo } from "./CollegeInfo";
import { Typography } from "@mui/material";

const useStyles = makeStyles({
  contactInformationDiv: {
    margin: "30px",
  },
  myInfoDiv: {
    margin: "20px 0px",
    backgroundColor: "rgb(240, 240, 248)",
    padding: "10px",
  },
});

export const ContactInfo = () => {
  const classes = useStyles();
  return (
    <div className={classes.contactInformationDiv}>
      <Typography align={"left"} variant="h4" style={{margin: "50px 0px", fontWeight: "600"}}>
        My Information
      </Typography>
      <AddressInfo />
      <EmailInfo />
      <CollegeInfo />
    </div>
  );
};
