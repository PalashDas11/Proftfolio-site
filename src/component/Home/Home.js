import React from 'react';
import Hero from '../Hero/Hero';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';

const Home = () => {
    return (
        <div className="px-5">
            <Hero></Hero>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;