import React from "react";
import "./Css/Banner.css";
import logo from "../assets/banner.jpg";

export default function Banner() {
  return (
    <div className="banner-content"> 
      <img src={logo} alt="banner" className="lg-banner" />
      <div className="position-absolute">
        <h1 className ='py-4'><b>Suong Nguyen</b></h1>
        <h2>Front-End Development</h2>
        <h3>WELCOME TO MY POFORLIO</h3>
      </div>
    </div>
  );
}
