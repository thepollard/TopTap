import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div>
    <h1>TopTap</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Survey">Survey</Link>
      </li>
    </ul>
  </div>
);

export default Header;