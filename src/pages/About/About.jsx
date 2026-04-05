import React from "react";
import AboutHero from "./AboutHero/AboutHero";
import AboutMessage from "./AboutMessage/AboutMessage";
import AboutProject from "./AboutProject/AboutProject";
import "./About.css"; 

function About() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
            <AboutHero />
            <AboutMessage />
            <AboutProject />
        </div>
    );
}

export default About;