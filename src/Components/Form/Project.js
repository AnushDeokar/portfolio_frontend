import React, { useState } from "react";
import "./Forms.css";
import { Button, Grid,  } from "@material-ui/core";
// import { Achievement } from "./Achievement";
import "./Forms.css";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";




const useStyles = makeStyles({
    btn: {
        color: "pink",
        backgroundColor: "blue",
        margin: "auto",
        "&:hover": {
            backgroundColor: "purple",
        },
    },
    title: {
        color: "blue",
        textDecoration: "underline",
    },
    field: {
        marginBottom: 20,
        marginTop: 20,
        // marginLeft: 20,
    }, labelc: {
        marginBottom: 20,
        marginLeft: 20,
        fontFamily: "Montserrat",
    },
    imgBtn: {
        // marginLeft: 20
    }
});







export const Project = () => {
    const classes = useStyles();
    return (
        <div className={classes.field}>
            <TextField
                className={classes.field}
                label="Project Title"
                variant="outlined"
                fullWidth
                color="secondary"
                // value={brieftextValue}
                required
            />

            {/* PROJECT DESCRIPTION */}
            <TextField
                className={classes.field}
                label="Project Description"
                variant="outlined"
                fullWidth
                color="secondary"
                rows={5}
                multiline
                // value={brieftextValue}
                required
            />

            



            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={6}>
                    {/* GITHUB LINK */}
                    <TextField
                        className={classes.field}
                        label="Github Link"
                        variant="outlined"
                        fullWidth
                        color="secondary"
                        type="url"
                        // value={brieftextValue}
                        required
                    />
                </Grid>

                <Grid item xs={12} md={6} lg={6}>
                    {/* DEPPOLYED LINK */}
                    <TextField
                        className={classes.field}
                        label="Project URL"
                        variant="outlined"
                        fullWidth
                        color="secondary"
                        type="url"
                        // value={brieftextValue}
                        required
                    />  
                </Grid>

            </Grid>

            {/* IMAGE OF PROJECT */}
            <Button
                variant="contained"
                component="label"
                className={classes.imgBtn}
            >
                Upload Image
                <input
                    type="file"
                    hidden
                    accept="image/*"
                />
            </Button>

        </div>
    )
}