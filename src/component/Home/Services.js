import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Services.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="pl-20 mt-28 service-section-head">
      <div className="flex items-center justify-center ">
        {/* <h1 className=" text-primary">What I do</h1>
                <span className='underline '></span> */}
        {/* <h1 className="text-5xl font-bold">Popular Service</h1> */}
      </div>
      <h2 className="text-2xl font-semibold py-10"> My Services.</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  service-section">
        <div className="card card-custom w-80">
          <div className="card-body text-center">
            <span>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3334/3334886.png"
                alt=""
              />
            </span>
            <h1 className="text-2xl font-semibold">Product Design</h1>
            <p>
              I work with certain design tools to create high design and
              prototypes. I design acessible and usable product which aid
              business gorwth.
            </p>
            <a href="#" className="font-bold uppercase mt-4">
              Learn More
              <FontAwesomeIcon className="pl-2" icon={faArrowRight}
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
        <div className="card card-custom w-80">
          <div className="card-body text-center">
            <span>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3242/3242257.png"
                alt=""
              />
            </span>
            <h1 className="text-2xl font-semibold">Web Development</h1>
            <p>
              I use various web techologies to develop attractive websites which
              converts visitor to customers. Using Node js for Backend
              development.
            </p>
            <a href="#" className="font-bold uppercase mt-4">
              Learn More <FontAwesomeIcon className="pl-2" icon={faArrowRight}></FontAwesomeIcon>
            </a>
          </div>
        </div>
        <div className="card card-custom w-80">
          <div className="card-body text-center">
            <span>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1104/1104982.png"
                alt=""
              />
            </span>
            <h1 className="text-2xl font-semibold">Database System</h1>
            <p>
              Implement Database system for customers projects. Make sure stores
              your data on Mongo Db, Also provides all Database services.
            </p>
            <a href="#" className="font-bold uppercase mt-4">
              Learn More <FontAwesomeIcon className="pl-2" icon={faArrowRight}></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
