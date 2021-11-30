import React from "react";
import PropTypes from  "prop-types";
import { makeStyles } from '@material-ui/core';
import { Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
const useStyles = makeStyles({
  contact:{
    backgroundColor:"#e6e6fa",
  },
  primar:{

    align:"center",
    textAlign:"center",

  },
  textb:{
    margin:"2%",
    padding:"5px",
  },
  mform:{
    align:"center",
    alignContent:"center",
  }, 

});

function Contact1(props) {
  const classes = useStyles();
  return (
    <section className={classes.contact}>
      <div>
        <div >
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(.4)" }}
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
          />
        <form className={classes.mform}>
        <div className={classes.primar}>
          <Typography variant="h5" align="center" margin={3}>
            Contact Me
            </Typography>

          <div>
          <TextField styles={{margin:"auto",}} className={classes.textb}id="outlined-basic" label="Name" variant="outlined" rows={1}/>
          <TextField id="outlined-basic" label="Email" variant="outlined" rows={1}/>
            
          </div>
          
          <div>
          <TextField
              id="outlined-multiline-flexible"
              label="Message"
              multiline
              rows={5}
          />
          </div>
          <Button variant="outlined">Submit</Button>
          
        </div>
        </form>
        <div className={classes.primar}>
            
              
              <a  href={"mailto:" + "example@gmail.com"} className={`text-${props.theme}-500 leading-relaxed`}>
                example@email.com
              </a>
              
              123-456-7890
           
          </div>
        </div>
      </div>
    </section>
  );
}

Contact1.defaultProps = {
  theme: 'indigo'
};

Contact1.propTypes = {
  theme: PropTypes.string.isRequired
};

export default Contact1;