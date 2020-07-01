import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faGlobe } from "@fortawesome/free-solid-svg-icons";
import "./Css/Contact.css";

export default function Contact() {
  return (
    <div className=" lg-background d-flex flex-column justify-content-center text-center py-5">
      <h1>
        <b>CONTACT ME</b>
      </h1>
      <h2>To Get More Information</h2>
      <div className="d-flex flex-row justify-content-center text-center py-2">
        <div className="card cards ml-5" style={{ width: "18rem" }}>
          <div className="card-body py-4">
            <FontAwesomeIcon icon={faEnvelope} size="3x" color= 'grey' />
            <p className="card-text py-1"><b>nguyentuyetsuong0604@gmail.com</b></p>
            <a
              href="mailto: nguyentuyetsuong0604@gmail.com"
              className="btn btn-primary btn btn-info "
            >
              Send me
            </a>
          </div>
        </div>
        <div className="card cards mx-5" style={{ width: "18rem" }}>
          <div className="card-body">
            <FontAwesomeIcon icon={faPhone} size="3x" color= 'grey' />
            <p className="card-text py-1"><b>0798.xxx.776</b></p>
            <a href="/" className="btn btn-primary btn btn-info">
              Call me
            </a>
          </div>
        </div>
        <div className="card cards mr-5" style={{ width: "18rem" }}>
          <div className="card-body">
            <FontAwesomeIcon icon={faGlobe} size="3x" color= 'grey' />
            <p className="card-text py-1">
             <b>Ho Chi Minh,Viet Nam.</b>
            </p>
            <a href="/" className="btn btn-primary btn btn-info">
              Visit me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
