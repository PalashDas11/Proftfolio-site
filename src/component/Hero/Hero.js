import React from 'react';
import './Hero.css'
import hero from '../../img/hero.png'
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center  pt-28">
            <div className='w-9/12 mobile-w custom-hero-content'>
                <h3 className="uppercase">Hi There, I'm</h3>
                <h1 className="text-7xl name font-bold py-5 uppercase">Palash Das</h1>
                <h2 className='text-2xl font-bold pb-3 uppercase text-primary'>Junior Web Developer</h2>
                <p className="mb-4"> I'm a professional Junior Web Developer with front end development and backend skills based</p>
                <Link className="custom-btn2" to ="#contact">Hire me</Link>
             </div>
            <div className="hero-img custom-hero-img ">
                <img src={hero} alt=""/>
            </div>
        </div>
    );
};

export default Hero;