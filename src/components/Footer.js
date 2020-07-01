import React from "react";
import "./Css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHtml5, faBootstrap, faJs, faReact } from "@fortawesome/free-solid-svg-icons";


export default function Footer() {
  return (
    <div>
      <footer className="main-footer bg-secondary ">
        <nav>
          <ul className="main__footer--links text-top text-bottom">
          {/* <FontAwesomeIcon icon={faHtml5} size ='2x' />
          <FontAwesomeIcon icon={faBootstrap}  size ='2x' />
          <FontAwesomeIcon icon={faJs} size ='2x' />
          <FontAwesomeIcon icon={faReact} size ='2x' /> */}
          <ol>
            <p className = 'text-center font-italic'>Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day saying 'I will try again tomorrow.'</p>
          </ol>
            <ol className="main__footer--link align-middle text-center py-3">
              &copy; Created by
              <a href="/" className="main__footer--name">
                Suong Nguyen
                <FontAwesomeIcon icon={'faFreecodecamp'} />
              </a>
            </ol>
          </ul>
        </nav>
      </footer>
    </div>
  );
}
