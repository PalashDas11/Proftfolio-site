import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons'
import './Contact.css'
import React from 'react';

const Contact = () => { 
    
    return (
        <div className="w-full pt-28">
            <div className="flex justify-center items-center ">
                <h1 className="text-center text-2xl text-primary  ">Contact Me</h1>
                <span className='underline '></span>
            </div>
            <p className="text-center">I'm available for your projects. If you want to than contact me </p>
            {/* icon  */}
            <div className='grid sm:grid-cols-1 md:grid-cols-2 mt-8 sm:mx-auto '>
                <div className="pt-12">
                    <div className="flex items-center ">
                        <span className="icon">
                            <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>
                        </span>
                        <p className='ml-2'>Brahmanbaria, Chittagong, Bangladesh</p>
                    </div>
                    <div className="flex items-center mt-4">
                        <span className="icon">
                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                        </span>
                        <p className='ml-2'>pnpalash20@gmail.com</p>
                    </div>
                    <div className="flex items-center mt-4">
                        <span className="icon">
                            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                        </span>
                        <p className='ml-2'>+880 1660011793</p>
                    </div>
                </div>

                {/* form  */}

                <div className='pt-5 custom-form'>
                    <form action="https://formspree.io/f/xnqwrzlq" method="POST">
                        <input name="user_name" type="text" placeholder="Your name" className="input input-bordered text-black  w-96" /> <br />
                        <input name="email" type="user_email" placeholder="Your Email" className="input input-bordered text-black my-5 w-96" /> <br />
                        <input name="number" type="phone" placeholder="Phone" className="input input-bordered text-black w-96 mb-5" /><br />
                        <textarea className=" taxtArea input-bordered text-black mt-5 w-96" name="message" id="" cols="40" rows="10" placeholder="Enter your message" ></textarea>
                        <div><input type="submit" value="Submit" className="custom-btn2 " /></div>
                    </form>
                </div>

            </div>


        </div>
    );
};

export default Contact;