/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Css/Navbar.css";

export default function Navigation() {
  return (
    <div className="navigation py-3 px-4 bg-secondary fixed-top">
      <h3>SN</h3>
       <div className= 'd-flex flex-row'>
        <a className="px-5 text-white" href="#Home">
          <b>Home</b>
        </a>
        <a className="px-5 text-white" href="#AboutMe">
          <b>About me</b>
        </a>
        <a className="px-5 text-white" href="Project">
          <b>Project</b>
        </a>
        <a className="px-5 text-white" href="Contact">
          <b>Contact</b>
        </a> 
      </div> 
  
{/* -------------------- */}
    </div>
    
  );
}

