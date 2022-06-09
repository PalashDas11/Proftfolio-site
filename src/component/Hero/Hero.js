import React from 'react';
import './Hero.css'
import hero from '../../img/hero.png'

const Hero = () => {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center  pt-7">
            <div className='w-9/12 '>
                <h3 className="uppercase">Hi There, I'm</h3>
                <h1 className="text-7xl name font-bold py-5 uppercase">Palash Das</h1>
                <h2 className='text-2xl font-bold pb-3 uppercase text-primary'>Junior Web Developer</h2>
                <p className=""> I'm a professional UI/UX designer with front end development skills based in Lago</p>
             </div>
            <div className="hero-img ">
                <img src={hero} alt=""/>
            </div>
        </div>
    );
};

export default Hero;