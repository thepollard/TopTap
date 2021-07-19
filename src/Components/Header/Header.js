// This code supplies the navigation menu and should probably have the name changed from Header to something else like navBar.

import React, { useState } from "react";
import HeaderAuth from "./HeaderAuth.js";
import HeaderGuest from "./HeaderGuest.js";

import './header.css';

export default function Header() {
  // const [flag, setFlag] = useState(false);
  var isValid = localStorage.getItem("auth");
  if (isValid !== null) {
    return <HeaderAuth />;
  }
  return <HeaderGuest />;
}