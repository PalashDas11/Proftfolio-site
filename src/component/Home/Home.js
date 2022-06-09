import React from 'react';
import Hero from '../Hero/Hero';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <div className="px-5">
            <Hero></Hero>
            <Contact></Contact>
        </div>
    );
};

export default Home;