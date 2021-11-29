import React from "react";
import { makeStyles } from "@material-ui/styles";
import Email from "@mui/icons-material/Email";
import { Typography } from "@mui/material";

const useStyles = makeStyles({
  contactInformationDiv: {
    margin: "30px",
  },
  myInfoDiv: {
    margin: "20px 0px",
    backgroundColor: "white",
    padding: "10px 30px",
  },
});

export const EmailInfo = () => {
  const classes = useStyles();
  return (
    <div className={classes.myInfoDiv}>
      <div style={{ textAlign: "center" }}>
        <Email
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
        <Typography
          variant="body2"
          style={{ flexGrow: "1", textAlign: "left" }}
        >
          Email:
        </Typography>
        <Typography variant="body2">example@gmail.com</Typography>
      </div>
      <div style={{ display: "flex", margin: "9px 0px" }}>
        <Typography
          variant="body2"
          style={{ flexGrow: "1", textAlign: "left" }}
        >
          Email-Sec:
        </Typography>
        <Typography variant="body2">abc.10@iitj.ac.in</Typography>
      </div>
      <div style={{ display: "flex", margin: "9px 0px" }}>
        <Typography
          variant="body2"
          style={{ flexGrow: "1", textAlign: "left" }}
        >
          Mobile:
        </Typography>
        <Typography variant="body2">1234567890</Typography>
      </div>
    </div>
  );
};
