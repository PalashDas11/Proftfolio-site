import React, { useState } from "react";
import "./About.css";

import palash from "../../img/palash12.jpg";
// import { useRef } from "react";
// import { useEffect } from "react";

const About = () => {
  // const containerRef = useRef(null)
  // const [isVisible, setIsVisible]= useState(false )
  // console.log(isVisible);
  // const callbackFunction = (entries)=> {
  //   const [entry]= entries;
  //   console.log(entry.isIntersecting);
  //   setIsVisible(entry.isIntersecting)
  // }
  // const option = {
  //   root: null,
  //   rootMargin: '0px',
  //   threshold:1.0,
  // }

  // useEffect(()=> {
  //   const observer = new IntersectionObserver(callbackFunction, option)
  //   if(containerRef.current) observer.observe(containerRef.current)
  //   return ()=> {
  //     if(containerRef.current) observer.unobserve(containerRef.current)

  //   }
  // }, [containerRef, option])

  return (
    <div className="grid items-center sm:grid-cols-1 md:grid-cols-2 pl-20 mt-28 about-animate about-section">
      {/* <div ref={containerRef} className ={isVisible ? 'fade-in': 'fade-out'}> this is observeing</div> */}
      <div className="about-img">
        <img src={palash} alt="" />
      </div>
      <div className="about-content">
        <div className="flex items-center ">
          <h1 className=" text-primary  ">Who I am</h1>
          <span className="underline "></span>
        </div>
        <h2 className="text-2xl font-semibold pt-2">About me</h2>
        <p>
          My name is Palash Das, I'm a Full Stack developer. I includes
          designing user interactions on websites, developing servers and
          databases for website functionality and coding for mobile platforms.
          Developing front end website architecture and user interaction on web
          page. I also creating servers and databases for functionality,
          designing and developing APIs. And Using Mongodb Database. I Ensure
          responsiveness of web applications for mobile and tablet.
          {/* My Skills : HTML, CSS, CSS framwork(Bootstrap , tailwind css) Javascript, React Javascript, Node js, firebase, Mongodb. */}
        </p>
        <h3 className="pt-10">
          Here are the technologies I've been working with recently:
        </h3>
        <span className="about-skills flex pt-6">
          <div className="pr-5">
            <h6>HTML, CSS</h6>
            <h6>CSS framwork(Bootstrap , tailwind css)</h6>
            <h6>Javascript (ES6+)</h6>
            <h6>React</h6>
          </div>
          <div>
            <h6>Node js</h6>
            <h6>Express Js</h6>
            <h6>Mongodb</h6>
            <h6>Firebase</h6>
          </div>
        </span>
      </div>
    </div>
  );
};

export default About;
