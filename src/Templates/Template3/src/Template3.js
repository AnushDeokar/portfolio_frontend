import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
// import Main from "./Components/Main";
import { Link } from 'react-router-dom';
import { Router } from "@mui/icons-material";

import { Switch, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Aboutme from "./Components/Aboutme";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Projects from './Components/Projects';

function Template3() {
  return (
    <>
    <Homepage/>
    
    <Router>
        <Layout>
          <Switch>
          <Route path="/">
              <Homepage />
            </Route>
            <Route path="/AboutMe">
              <Aboutme />
            </Route>
            <Route path="/Projects">
              <Projects />
            </Route>
            
            <Route path="/Resume">
              <Resume />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>


          </Switch>
        </Layout>
      </Router>
      
      {/* // <Router>
      // <Layout>
      //   <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">My Portfolio</Link>} scroll>
      //     <Navigation>
      //       <Link to="/Resume">Resume</Link>
      //       <Link to="/Aboutme">About Me</Link>
      //       <Link to="/Projects">Projects</Link>
      //       <Link to="/Contact">Contact</Link>
      //     </Navigation>
      //   </Header>
      //   <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">My Portfolio</Link>}>
      //     <Navigation>
      //       <Link to="/Resume">Resume</Link>
      //       <Link to="/Aboutme">About Me</Link>
      //       <Link to="/Projects">Projects</Link>
      //       <Link to="/Contact">Contact</Link>
      //     </Navigation>
      //   </Drawer>
      //   <Content>
      //     <div className="page-content"></div>
          
      //   </Content>
      // </Layout>
      // </Router> */}
      </>
    
  );
}

export default Template3;
