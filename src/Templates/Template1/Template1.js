import React from 'react'
import {Header} from "./Header1/Header1";
import {About1} from "./About1/About1";
import {Introduction1} from "./Introduction1/Introduction1";
import {Services1} from "./Services1/Services1";
import Projects1 from "./Projects1/Projects1";
import Contact1 from "./Contact1/Contact1";
import Footer1 from "./Footer1/Footer1";
import { CourseComponent } from './Courses/CourseComponent';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useEffect } from 'react';
import { Courses} from './Courses/Courses';


export const Template1 = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            
            <Router>
        <Switch>
          <Route exact path="/">
            <Header data={props.details}/>
            <About1 data={props.details} />
            <Introduction1 data={props.details} />
            <Services1 data={props.details} />
            <Projects1 data={props} />
            <Courses data={props.details}/>
            <Contact1 data={props.details} />
            <Footer1 data={props.details} />
            {/* <h1>This is the first sample template.</h1> */}
            </Route>
            <Route exact path="/course">
              <CourseComponent data={props.details}/>
            </Route>
          </Switch>
        </Router>
    
        </div>
    )
}
