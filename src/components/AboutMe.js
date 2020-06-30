import React from "react";
import logo from "../assets/aboutme.jpg";
import "./Css/AboutMe.css";
export default function AboutMe() {
  return (
    <div className="py-3 bg-secondary">
      <div className="aboutme-text text-white">
        <h1>
          <b>ABOUT ME</b>
        </h1>
        <h2> All About My Passing </h2>
      </div>
      <div className="aboutme-column py-2 text-white ">
        <img src={logo} alt="aboutme" className="sm-aboutme mg-10" />

        <ul className="text py-5 col-8">
          <li>Full Name: Nguyen Thi Tuyet Suong.</li>
          <li>DOB: 02/09/1995.</li>
          <li>
            2018: graduate environmental engineering department at Ton Duc Thang
            University.{" "}
          </li>
          <li>2018-2019: Sales and Sales manager.</li>
          <li>
            {" "}
            2020->now: self learning and take part in specialized short courses:
            Html5, Css, JavaScript, Reactjs.{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
