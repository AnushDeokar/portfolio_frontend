import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import { Contact } from "./Contact/Contact";
import { Education } from "./Education/Education";
import { Introduction } from "./Introduction/Introduction";
import { Projects } from "./Projects/Projects";
import { Services } from "./Services/Services";
import { Testimonials } from "./Testimonials/Testimonials";

export const CentralColoumn = ({ drawerWidthLeft, drawerWidthRight }) => {
  console.log(window.innerWidth);
  if (window.innerWidth <= 900) {
    drawerWidthLeft = 0;
    // drawerWidthRight = 0;
  }
  if (window.innerWidth <= 580) {
    // drawerWidthLeft = 0;
    drawerWidthRight = 0;
  }
  return (
    <div
      style={{
        marginLeft: drawerWidthLeft,
        marginRight: drawerWidthRight,
        marginTop: "70px",
        width: `calc(100vw - ${drawerWidthLeft + drawerWidthRight}px)`,
      }}
    >
      <Router>
        {/* <Layout> */}
          <Switch>
            <Route exact path="/">
              <Introduction />
              <Services />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/testimonials">
              <Testimonials />
            </Route>
            <Route path="/education">
              <Education />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        {/* </Layout> */}
      </Router>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum corrupti
        necessitatibus quibusdam quo? Expedita rem, quam blanditiis molestias
        harum sed nesciunt vel nisitis quaerat, maiores expedita praesentium
        dicta illo deleniti sapiente aliquam sequi nemo?
      </h1>
    </div>
  );
};
