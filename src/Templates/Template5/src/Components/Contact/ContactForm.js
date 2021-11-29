// import { TextField } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import { Button, TextField } from "@mui/material";
import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  contactFormDiv: {
    margin: "30px",
  },
  inputField: {
    margin: "15px 0px",
  },
  formBtn: {
    alignContent: "left",
    // float: "left",
    marginTop: "10px",
    padding: "6px 25px",
  },
});

export const ContactForm = () => {
  const classes = useStyles();
  return (
    <div className={classes.contactFormDiv}>
      <Typography
        align={"left"}
        variant="h4"
        style={{ margin: "50px 0px", fontWeight: "600" }}
      >
        Leave Us Your Info
      </Typography>
      <div
        style={{
          marginTop: "20px",
          backgroundColor: "white",
          padding: "40px 30px",
        }}
      >
        <TextField
          size={"small"}
          className={classes.inputField}
          variant="filled"
          color="primary"
          label="Name"
          type="text"
          fullWidth
          required
        />
        <TextField
          size={"small"}
          className={classes.inputField}
          variant="filled"
          color="primary"
          label="Email"
          type="email"
          fullWidth
          required
        />
        <TextField
          size={"small"}
          className={classes.inputField}
          variant="filled"
          color="primary"
          label="Subject"
          type="text"
          fullWidth
          required
        />
        <TextField
         size={"small"}
          className={classes.inputField}
          variant="filled"
          color="primary"
          label="Message"
          type="text"
          multiline
          rows={7}
          fullWidth
          required
        />
        <Button className={classes.formBtn} variant="contained" color="primary">
          Send
        </Button>
      </div>
    </div>
  );
};
