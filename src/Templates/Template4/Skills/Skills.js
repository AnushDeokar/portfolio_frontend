import React from "react";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
// import InstagramIcon from "@mui/icons-material/Instagram";
import { TechStack } from "./TechStack";
// import { Fa500Px } from "react-icons/fa";
import { Footer } from "./Footer";

const useStyles = makeStyles({
  mainDiv: {
    width: "100vw",
    backgroundColor: "#1f1f1f",
    height: "auto",
    paddingTop: "50px",
    paddingBottom: "10px",
    textAlign: "center",
    alignContent:"center",
    fontFamily: "Montserrat",
  },
  subDiv: {
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "Montserrat",
    fontSize: "30px",
  },
  heade: {
    fontFamily: "Montserrat",
    color: "white",
  },
});

export const Skills = (props) => {
  const classes = useStyles();
  const skillsarray = props.data.skills;
  console.log(props.data);
  return (
    <div className={classes.mainDiv}>
      <Typography className={classes.heade} variant="h4" align="center" margin="10px">
        Skills
      </Typography>
      <Container style={{margin: "auto"}}>
        <Grid container  alignItems="center"
  justifyContent="center"  spacing={2}>
          {skillsarray.map((data, index) => (
            <Grid key={index} item xs={6} md={6} lg={1}>
              <div
                style={{
                  textAlign: "center",
                  backgroundColor: "rgba(248,245,244,.05)",
                  padding: "7px 17px",
                  marginTop:"50px",
                  borderRadius: "7px",
                }}
              >
                  <div style={{color: "white", fontSize: "49px"}}>
                      {/* <Icon> */}
                        {data.symbol}
                          {/* </Icon> */}

                  </div>
                <Typography variant="body2" style={{ color: "white" }}>
                  {data.name}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>

        <Footer data={props.data.pages[0].data}/>
      </Container>
    </div>
  );
};