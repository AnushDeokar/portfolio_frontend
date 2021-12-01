import React from "react";
import PropTypes from  "prop-types";
import { makeStyles } from '@material-ui/core';
import { Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
const useStyles = makeStyles({
  contact:{
    backgroundColor:"#ffffff",
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
  textf:{
    margin:"50px",

  }


});

function Contact1(props) {
  const classes = useStyles();
  return (
    <section className={classes.contact}>
      
         
        <form className={classes.mform}>
        <div className={classes.primar}>
          <Typography variant="h5" align="center" margin={3}>
            Contact Me
            </Typography>

          <div>
          <TextField styles={{margin:"50px",}} className={classes.textb}id="outlined-basic" label="Name" variant="outlined" rows={1}/>
          <TextField id="outlined-basic" label="Email" variant="outlined" rows={1}/>
            
          </div>
          
          <div>
          <TextField
              id="outlined-multiline-flexible"
              label="Message"
              multiline
              rows={5}
              className={classes.textf}
          />
          </div>
          <Button variant="outlined">Submit</Button>
          
        </div>
        </form>
        <div className={classes.primar}>
            
              
              
                <Typography> example@email.com</Typography>
             
              
              123-456-7890
           
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