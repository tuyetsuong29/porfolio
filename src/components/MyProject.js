import React from "react";
import "./Css/MyProject.css";

export default function MyProject() {
  return (
    <div className="d-flex flex-column justify-content-center text-center">
      <h1>
        <b>MY PROJECTS</b>
      </h1>
      <h2>All About My Work</h2>
      <div className="d-flex flex-row justify-content-around text-center">
        <div>
          <img className="project-image" src="/" alt="project" />
          <p>
            <a href="/" target="_blank" className="project-title">
              <b>Tên project</b>
            </a>
          </p>
        </div>
        <div>
          <img className="project-image" src="/" alt="project" />
          <p>
            <a href="/" target="_blank" className="project-title">
              <b>Tên project</b>
            </a>
          </p>
        </div>
        <div>
          <img className="project-image" src="/" alt="project" />
          <p>
            <a href="/" target="_blank" className="project-title">
              <b>Tên project</b>
            </a>
          </p>
        </div>
        <div>
          <img className="project-image" src="/" alt="project" />
          <p>
            <a href="/" target="_blank" className="project-title">
              <b>Tên project</b>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
