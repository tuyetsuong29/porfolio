import React from "react";
import logo from "../assets/aboutme.jpg";
import "./Css/AboutMe.css";
export default function AboutMe() {
  return (
    <div className = 'py-3'>
      <div className = 'aboutme-text'>
      <h1>
        <b>ABOUT ME</b>
      </h1>
      <h2> All About My Passing </h2>
      
      </div>
      <div className="aboutme-column py-2">
        <img src={logo} alt="aboutme" className="sm-aboutme mg-10" />
        <p>để đó viết sau </p>
      </div>
    </div>
  );
}
