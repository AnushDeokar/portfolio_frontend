import React from 'react'
import {Header} from "./Header1/Header1";
import {About1} from "./About1/About1";
import {Introduction1} from "./Introduction1/Introduction1";
import {Services1} from "./Services1/Services1";
import Projects1 from "./Projects1/Projects1";
import Contact1 from "./Contact1/Contact1";
import Footer1 from "./Footer1/Footer1";

import {useEffect } from 'react';



export const Template1 = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            
            <Header data={props.details}/>
            <About1 data={props.details} />
            <Introduction1 data={props.details} />
            <Services1 data={props.details} />
            <Projects1 data={props.details} />
            <Contact1 data={props.details} />
            <Footer1 data={props.details} />
            {/* <h1>This is the first sample template.</h1> */}
        </div>
    )
}
