import React from 'react';
import Bannar from './bannar/Bannar';
import About from '../pages/about/About';
import Skills from '../pages/skills/Skills';
import Projects from '../pages/projects/Projects';
import Contact from '../pages/contact/Contact';

const Home = () => {
    return (
        <div>
            <Bannar/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    );
};

export default Home;