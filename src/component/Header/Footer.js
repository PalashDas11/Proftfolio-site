import github from '../../img/github.svg'
import linkedin from '../../img/linkedin.svg'
import whatsapp from '../../img/whatsapp.svg'
import './Footer.css'
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 py-28 custom-footer">
            <div>
            <Link to ="/home" className=" logo text-3xl">ꉣꋫ꒒ꋫꌚꑛ</Link>
            </div>
            <div>
                <span>Copyright&copy;.All Rights Reserved</span>
            </div>
            <div className="flex items-center justify-center">
                <a href=""><img  src={linkedin} alt="" /></a>
                <a href="" className='text-white px-6'><img src={github} alt="" /></a>
                <a href=""><img src={whatsapp} alt="" /></a>
            </div>
        </div>
    );
};

export default Footer;