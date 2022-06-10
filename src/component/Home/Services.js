

import React from 'react';
import './Services.css'

const Services = () => {
    return (
        <div className='pt-28'>
            <div className="flex items-center justify-center ">
                <h1 className=" text-primary">What I do</h1>
                <span className='underline '></span>
            </div>
            <h2 className='text-2xl font-semibold text-center py-2'> My Services</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 service-section">
                <div className="card shadow-xl w-96">
                    <div className="card-body">
                        <span>
                          <img src="https://cdn-icons-png.flaticon.com/512/3334/3334886.png" alt=""  />
                        </span>
                        <h1 className="text-2xl font-semibold">Product Design</h1>
                        <p>I work with certain design tools to create high design and prototypes. I design acessible and usable product which aid business gorwth.</p>
                    </div>
                </div>
                <div className="card shadow-xl w-96">
                    <div className="card-body">
                        <span>
                  <img src="https://cdn-icons.flaticon.com/png/512/1329/premium/1329016.png?token=exp=1654880980~hmac=b39ce253815275d77e91dc9b50192b08" alt=""/>
                        </span>
                        <h1 className="text-2xl font-semibold">Web Development</h1>
                        <p>I use various web techologies to develop attractive websites which converts visitor to customers. Using Node js for Backend development.</p>
                    </div>
                </div>
                <div className="card shadow-xl w-96">
                    <div className="card-body">
                        <span>
          <img src="https://cdn-icons-png.flaticon.com/512/1104/1104982.png" alt="" />
                        </span>
                        <h1 className="text-2xl font-semibold">Database System</h1>
                        <p>Implement Database system for customers projects. Make sure stores your data on Mongo Db, Also provides all Database services.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;