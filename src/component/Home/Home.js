import React from 'react';
import Hero from '../Hero/Hero';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Services from './Services';
import Skills from './Skills';

const Home = () => {
    return (
        <div className="px-5">
            <Hero></Hero>
           
            <About></About>
            <Services></Services>
            <Skills></Skills>
            {/* <Projects></Projects>
            <Contact></Contact> */}
        </div>
    );
};

export default Home;