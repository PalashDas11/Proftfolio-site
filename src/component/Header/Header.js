import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownAZ,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../img/logo.png";
import { useState } from "react";

const Header = () => {
  const [mobile, setMobile] = useState(true);
  return (
    <div className="flex justify-between items-center px-5 header sticky top-0 ">
      <div>
        <img src={logo} alt="" srcset="" width="80px" />
      </div>
      <div>
        <nav className={ mobile ? `custom-nav`: `nav-link-mobile`}>
          <Link to="/">Home</Link>
          <Link to="/projects">Project</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <button to="/" className="custom-btn2">
            Resume <FontAwesomeIcon icon={faArrowDownAZ}></FontAwesomeIcon>
          </button>
        </nav>
      </div>
      <button className="nav-icon" onClick={ () => setMobile(!mobile)}>
        {mobile ? (
          <FontAwesomeIcon className="Bars" icon={faBars}></FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon className="Close" icon={faClose}></FontAwesomeIcon>
        )}
      </button>
    </div>
  );
};

export default Header;
