import * as React from "react";
import Layout from "./Components/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Introduction } from "./Components/Introduction/Introduction";
import { Services } from "./Components/Services/Services";
import { Projects } from "./Components/Projects/Projects";
import { Testimonials } from "./Components/Testimonials/Testimonials";
import { Education } from "./Components/Education/Education";
import { Contact } from "./Components/Contact/Contact";
import { createTheme } from "@mui/material";
// import { amber, blue } from "@mui/material/colors";
import { ThemeProvider } from "@emotion/react";
import { CourseComponent } from "./Components/Courses/CourseComponent";

const drawerWidthLeft = 280;
const drawerWidthRight = 70;

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFB400",
      light: "#FFB400",
      dark: "#FFB400",
    },
    // primary: "#FFB400",
  },
  typography: {
    fontFamily: "Montserrat",
  },
});

function Template5(props) {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout
          drawerWidthLeft={drawerWidthLeft}
          drawerWidthRight={drawerWidthRight}
        >
          <Switch>
            <Route exact path="/">
              <Introduction data={props.details}/>
              <Services data={props.details}/>
            </Route>
            <Route path="/services">
              <Services data={props.details}/>
            </Route>
            <Route path="/projects">
              <Projects data={props.details}/>
            </Route>
            <Route path="/testimonials">
              <Testimonials data={props.details}/>
            </Route>
            <Route path="/education">
              <Education data={props.details}/>
            </Route>
            <Route path="/contact">
              <Contact data={props.details}/>
            </Route>
            <Route path="/course">
              <CourseComponent data={props.details}/>
            </Route>

          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default Template5;
