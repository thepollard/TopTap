// This code supplies the navigation menu and should probably have the name changed from Header to something else like navBar.

import React from "react";
import { Link } from "react-router-dom";
import './header.css'

const Header = () => (
  <div>
    {/* <img src="TopTap2.png" alt="TopTap" /> */}
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Survey">Survey</Link>
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

export default Header;