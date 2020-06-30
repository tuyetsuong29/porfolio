import React from "react";
import "./Css/Banner.css";
import logo from "../assets/banner.png";
import Typical from 'react-typical'; 

export default function Banner() {
// -----


// -----
  return (
    <div className=" d-flex justify-content-end"> 
      <img src={logo} alt="banner" className="lg-banner" />
      <div className="position-absolute">
        <h2 className='font-italic py-1'>Front-End Development</h2>
     {/* //Simulate Typing Animation */}
        <p className='simulate-typing'>I'm  {''}
        <Typical 
        loop = {Infinity}
        wrapper= "b"
        steps={[
          'Suong Nguyen',
          3000,
          'a Developer '

        ]}
        />
        </p>
        <h3 className='welcome__section--jobname py-5 pr-5' >Wellcome you go to my world</h3>
      </div>
      {/* ---- */}
      
     
    </div>
  );
}
