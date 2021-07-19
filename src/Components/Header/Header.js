// This code supplies the navigation menu and should probably have the name changed from Header to something else like navBar.

import React, { useState } from "react";
import HeaderAuth from "./HeaderAuth.js";
import HeaderGuest from "./HeaderGuest.js";

import './header.css';

// const Header = () => (
//   <div>
//     <HeaderAuth />
//   </div>
// );

// export default Header;

export default function Header() {
  // console.log("asdfa"+props.flag);
  const [flag, setFlag] = useState(false);
  var isValid = localStorage.getItem("auth");
  if (isValid !== null) {
    return <HeaderAuth />;
  }
  return <HeaderGuest />;
}