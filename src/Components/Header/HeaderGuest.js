import React from "react";
import { Link } from "react-router-dom";
import TopTap from "../../img/TopTap.png";

import './header.css';

const HeaderGuest = () => (
    <div className="site-header">
        <div className="bg-img">
        <Link to="/">
            <img src={TopTap} alt="TopTap" className="logo" />
        </Link>
        </div>
        <ul className="navigation">
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/Bouncer">Make a List</Link>
        </li>
        <li>
            <Link to="/About">About Us</Link>
        </li>
        <li>
            <Link to="/Login">Login</Link>
        </li>
        <li>
            <Link to="/Register">Register</Link>
        </li>
        </ul>
    </div>
);
  
  export default HeaderGuest;