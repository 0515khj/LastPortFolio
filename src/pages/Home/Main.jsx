import React from 'react';
import MainHome from './MainHome';
import Skill from '../Skills/Skill';
import About from '../About/About';
import Project from '../Project/Project';
import Contact from '../Contact/Contact';
import FadeIn from '../../components/common/FadeIn';


const Main = () => {
    return (
        <div>
            <div id="home">
                <MainHome />
            </div>

            <FadeIn delay={0.2}>
                <div id="about">
                    <About />
                </div>
            </FadeIn>

            <Skill />

            <FadeIn delay={0.2}>
            <div id="project">
                <Project />
            </div>
            </FadeIn>

            <FadeIn delay={0.2}>
            <div id="contact">
                <Contact />
            </div>
            </FadeIn>
        </div>
    );
};

export default Main;