import * as React from "react";
import PropTypes from "prop-types";
import {
  Avatar,
  LinearProgress,
  Drawer,
  Button,
 
  IconButton,
  Icon,
} from "@mui/material";
import { Send } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/styles";
import { GitHub, Instagram, Twitter, Facebook } from "@mui/icons-material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const drawerWidth = 280;

const languagesSpoken = [
  {
    id: 1,
    name: "Hindi",
    value: 100,
  },
  {
    id: 2,
    name: "English",
    value: 90,
  },
  {
    id: 3,
    name: "French",
    value: 80,
  },
];

const programmingLanguages = [
  {
    id: 4,
    name: "C++",
    value: 90,
  },
  {
    id: 5,
    name: "C",
    value: 85,
  },
  {
    id: 6,
    name: "Python",
    value: 80,
  },
  {
    id: 7,
    name: "Javascript",
    value: 75,
  },
];

const techStack = [
  {
    id: 8,
    name: "HTML",
    value: 90,
  },
  {
    id: 9,
    name: "CSS",
    value: 90,
  },
  {
    id: 10,
    name: "Django",
    value: 90,
  },
  {
    id: 11,
    name: "NodeJS",
    value: 75,
  },
  {
    id: 12,
    name: "ReactJS",
    value: 70,
  },
  {
    id: 13,
    name: "MaterialUI",
    value: 70,
  },
];

const extraSkills = [
  {
    id: 14,
    name: "VSCode",
  },
  {
    id: 15,
    name: "Heroku",
  },
  {
    id: 16,
    name: "Amazon EC2",
  },
  {
    id: 17,
    name: "Machine Learning",
  },
];

const myData = [
  {
    name: "Age",
    info: "20",
  },
  {
    name: "College",
    info: "IIT Jodhpur",
  },
  {
    name: "Citations",
    info: "680",
  },
];

const useStyles = makeStyles({
  avatar: {
    margin: "15px auto",
  },
  drawerDiv: {
    margin: " 10px 28px",
    // overflowY: "hidden",
  },
  contentsDiv: {
    margin: "20px 0px",
    height: "355px",
    overflow: "auto",
  },
});

function ResponsiveDrawer({ mobileOpen, handleDrawerToggleLeft }) {
  const { window } = mobileOpen;

  const classes = useStyles();

  const drawer = (
    <div className={classes.drawerDiv}>
      <Avatar sx={{ width: 150, height: 150 }} className={classes.avatar} />
      <Typography align={"center"} variant="h6" mt={1}>
        Anush Deokar
      </Typography>
      <Typography align={"center"} variant="body1" color="textSecondary" mt={1}>
        Full Stack Developer
      </Typography>
      {/* <Grid mt={1}  container spacing={0.5}> */}
      <div
        style={{
          margin: "2px 25px",
        }}
      >
        {[<GitHub />, <Twitter />, <Facebook />].map(
          (data, index) => (
            // <Grid item key={index}>
            <IconButton key={index} color="primary">
              {data}
            </IconButton>
            // </Grid>
          )
        )}
      </div>
      {/* // </Grid> */}
      <div className={classes.contentsDiv}>
        {/* Personel Details */}
        <hr />
        {myData.map((data, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              backgroundColor: "#FFB400",
              padding: "3px 7px",
              margin: "5px 0px",
            }}
          >
            <Typography
              variant="body1"
              style={{ flexGrow: "1", fontSize: "0.85rem", fontWeight: "bold" }}
            >
              {data.name}:
            </Typography>
            <Typography variant="body1" style={{ fontSize: "0.75rem" }}>
              {data.info}
            </Typography>
          </div>
        ))}
        <hr />

        {/* Langusges Spoken */}
        {/* <h1
          style={{
            fontSize: "1.23rem",
            fontWeight: "500",
            fontFamily: "'Staatliches', cursive",
            color: "#3b3c36",
            letterSpacing: "0.05rem",
          }}
        >
          LANGUAGES
        </h1>
        <div style={{ marginBottom: "15px" }}>
          {languagesSpoken.map((data) => (
            <div key={data.id} style={{ margin: "8px 0px" }}>
              <div style={{ display: "flex" }}>
                <Typography
                  variant="body1"
                  style={{ flexGrow: "1", fontSize: "0.85rem" }}
                >
                  {data.name}:
                </Typography>
                <Typography variant="body1" style={{ fontSize: "0.8rem" }}>
                  {data.value}
                </Typography>
              </div>
              <LinearProgress variant="determinate" value={data.value} />
            </div>
          ))}
        </div>

        <hr /> */}

        {/* Programming Languages */}
        {/* <h1
          style={{
            fontSize: "1.23rem",
            fontWeight: "500",
            fontFamily: "'Staatliches', cursive",
            color: "#3b3c36",
            letterSpacing: "0.05rem",
          }}
        >
          PROGRAMMING LANGUAGES
        </h1>
        <div style={{ marginBottom: "15px" }}>
          {programmingLanguages.map((data) => (
            <div key={data.id} style={{ margin: "8px 0px" }}>
              <div style={{ display: "flex" }}>
                <Typography
                  variant="body1"
                  style={{ flexGrow: "1", fontSize: "0.85rem" }}
                >
                  {data.name}:
                </Typography>
                <Typography variant="body1" style={{ fontSize: "0.8rem" }}>
                  {data.value}
                </Typography>
              </div>
              <LinearProgress variant="determinate" value={data.value} />
            </div>
          ))}
        </div>

        <hr /> */}

        {/* Tech Stack */}
        <h1
          style={{
            fontSize: "1.23rem",
            fontWeight: "500",
            fontFamily: "'Staatliches', cursive",
            color: "#3b3c36",
            letterSpacing: "0.05rem",
          }}
        >
          Courses
        </h1>
        <div style={{ marginBottom: "15px" }}>
          {techStack.map((data) => (
            <div key={data.id} style={{ margin: "8px 0px" }}>
              <div style={{ display: "flex" }}>
                <Typography
                  variant="body1"
                  style={{ flexGrow: "1", fontSize: "0.85rem" }}
                >
                  {data.name}:
                </Typography>
                <Typography variant="body1" style={{ fontSize: "0.8rem" }}>
                  {data.value}
                </Typography>
              </div>
              <LinearProgress variant="determinate" value={data.value} />
            </div>
          ))}
        </div>

        <hr />

        {/* Extra Skills */}
        {/* <h1
          style={{
            fontSize: "1.23rem",
            fontWeight: "500",
            fontFamily: "'Staatliches', cursive",
            color: "#3b3c36",
            letterSpacing: "0.05rem",
          }}
        >
          EXTRA SKILLS
        </h1> */}
        {/* <div>
          {extraSkills.map((data) => (
            <div key={data.id} style={{display: "flex", margin: "5px 0px"}}>
              <Icon color="primary">
                  <AutoAwesomeIcon  style={{margin: "0px 7px 0px 0px"}} fontSize="medium" />
                </Icon>{" "}
              <Typography
                variant="body1"
                style={{ flexGrow: "1", fontSize: "0.85rem", margin: "auto 7px"}}
              >
                {data.name}
              </Typography>
            </div>
          ))}
        </div> */}
      </div>
      <Button variant="contained" endIcon={<Send />} fullWidth>
        Get Resume
      </Button>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggleLeft}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        style={{ left: "100px" }}
        open
      >
        {drawer}
      </Drawer>
    </>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
