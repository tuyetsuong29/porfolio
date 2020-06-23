import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Css/Contact.css";

export default function Contact() {
  return (
    <div className="d-flex flex-column justify-content-center text-center py-3">
      <h1>
        <b>CONTACT ME</b>
      </h1>
      <h2>To Get More Information</h2>
      <div className="d-flex flex-row justify-content-center text-center py-2">
        <div className="card ml-5" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title"><b>Email</b></h5>
            <p className="card-text">
              nguyentuyetsuong0604@gmail.com
            </p>
            <a href="mailto: nguyentuyetsuong0604@gmail.com" className="btn btn-primary" target ="_blank">
            Send mail
            </a>
          </div>
        </div>
        <div className="card  mx-5" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Telephone</h5>
            <p className="card-text">
              phone: 0798.210.776
            </p>
            <a href="/" className="btn btn-primary" >
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card mr-5" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Github</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      {/* <FontAwesomeIcon icon="telephone" /> */}
    </div>
  );
}
