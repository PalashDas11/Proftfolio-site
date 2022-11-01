import React from 'react';
import './Hero.css'
import hero from '../../img/hero.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCode} from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
    return (
        <div className="px-5 lg:flex items-center hero-section">
            <div className="hero-icon col-span-1">
            <Link to="/"><i class="fa-brands fa-facebook"></i></Link>
            <Link to="/"><i class="fa-brands fa-linkedin"></i></Link>
            <Link to="/"><i class="fa-brands fa-twitter"></i></Link>
            <Link to="/"><i class="fa-brands fa-instagram"></i></Link>
            </div>
            <div className='w-full custom-hero-content pl-20'>
                <h3 className="pt-4 text-primary text-md">Hi There, I'm</h3>
                <h2 className="text-6xl name font-bold pt-5 uppercase">Palash Das.</h2>
                <h1 className="text-6xl name font-bold py-5 ">Work and build every thing on web.  <FontAwesomeIcon className="text-primary text-3xl  IconAminate" icon={faCode}></FontAwesomeIcon></h1>
                <h2 className='text-2xl font-bold pb-3 uppercase text-primary'>Junior Web Developer</h2>
                <p className="mb-10"> I'm a professional Junior Web Developer with front end development and backend skills based.<br/> Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>
                <Link className="custom-btn1" to ="#contact">Hire me</Link>
             </div>
            
            
        </div>
    );
};

export default Hero;