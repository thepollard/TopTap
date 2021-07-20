import React from "react";
import { Link } from "react-router-dom";
import TopTap from "../../img/TopTap.png";
import UserLogOut from "../Auth/AuthLogout";
import {WhoAmI} from '../CurrentUser/CurrentUser';

import './header.css';

const HeaderAuth = () => (
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
      <li className="whoAmI">
        <WhoAmI />
      </li>
      <li>
        <UserLogOut />
      </li>
    </ul>
  </div>
);
  
  export default HeaderAuth;