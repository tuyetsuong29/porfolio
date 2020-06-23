/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Css/Navbar.css";

export default function Navigation() {
  return (
    <div className="navigation py-3">
      <h3>SN</h3>
      <div>
        <a className="px-5" href="#">
          Home
        </a>
        <a className="px-5" href="#">
          About me
        </a>
        <a className="px-5" href="#">
          Project
        </a>
        <a className="px-5" href="#">
          Contact
        </a>
      </div>
    </div>
  );
}
