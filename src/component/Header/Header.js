import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='px-5'>
      <div className="navbar uppercase font-header">
        <div className="navbar-start">
          <div className="dropdown ">
            <label tabIndex="0" className="btn btn-ghost md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
              <li><Link to="home">Home</Link></li>
              <li tabIndex="0">
                <Link to="/projects" className="justify-between"> Projects</Link>
                <Link to="/blog" className="justify-between"> Blog</Link>

              </li>

              <a href="https://drive.google.com/file/d/1FkvESxgugaw-TRUbbGNQEH8gLvaT0HLt/view?usp=sharing" className="custom-btn">Downlod Resume</a>
              <Link to="/contact" className=" custom-btn">contact</Link>
            </ul>
          </div>
          <div>
            <Link to="/home" className=" logo text-3xl">ꉣꋫ꒒ꋫꌚꑛ</Link>

          </div>
        </div>
        <div className="navbar-end font-semibold hidden md:flex">
          <ul className="menu menu-horizontal p-0">
            <li><Link to="home">Home </Link></li>
            <li tabIndex="0">
              <Link to="projects">Projects</Link>
              <Link to="/blog" className="justify-between"> Blog</Link>


            </li>

            <a href="https://drive.google.com/file/d/1FkvESxgugaw-TRUbbGNQEH8gLvaT0HLt/view?usp=sharing" className=" custom-btn ">Download Resume</a>
            <Link to="/contact" className=" custom-btn">contact</Link>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Header;