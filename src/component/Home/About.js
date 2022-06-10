import React from 'react';
import './About.css'

import palash from '../../img/Palash11.png'

const About = () => {
    return (
        <div className="grid items-center sm:grid-cols-1 md:grid-cols-2 about-section pt-28">

            <div className="about-img">
                <img src={palash} alt="" />
            </div>
            <div>

                <div className="flex items-center ">
                    <h1 className=" text-primary  ">Who I am</h1>
                    <span className='underline '></span>
                </div> 
                <h2 className="text-2xl font-semibold pt-2">About me</h2>
                <p> My name is Palash Das, I'm a Full Stack developer.I includes includes designing user interactions on websites, developing servers and databases for website functionality and coding for mobile platforms. Developing front end website architecture and user interaction on web page. I also creating servers and databases for functionality, designing and developing APIs. And Using Mongodb Database. I Ensure responsiveness of web applications for mobile and tablet.

                    My Skills : HTML, CSS, CSS framwork(Bootstrap , tailwind css) Javascript, React Javascript, Node js, firebase, Mongodb.</p>
            </div>
        </div>
    );
};

export default About;