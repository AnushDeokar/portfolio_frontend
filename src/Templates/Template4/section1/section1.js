import React from 'react'
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import { makeStyles, Typography } from '@material-ui/core';
import Typical from "react-typical";

const useStyles = makeStyles({
    mainDiv: {
        width: "100vw",
        backgroundColor: '#e9d5a1',
        height:'90vh'
    },
    subDiv:{
        justifyContent: "center",
        textAlign: "center",
        // position: "relative",
        fontFamily: "Montserrat",
        fontSize:"20px",
    },

}); 

export const Section1 = (props) => {
    
    const classes = useStyles();
    const details = props.data;
    const name = details.pages[0].data.name;
    const brief = details.pages[0].data.brief;
    var titles =['', 1000, brief, 1000];
    
    return (
        
        <div className={classes.mainDiv}>
            <div className={classes.subDiv}>
                <DesktopMacIcon className={classes.wrapIcon} sx={{ fontSize: 250}}  />
                <Typography style={{ fontWeight: 800 }} variant="h3">{name}</Typography>
                <div className="title-container">
                <Typical className="title-styles" steps={titles} loop={50} />
                </div>
            </div>
        </div>
    )
}