import React from "react";
import "./Css/MyProject.css";
import tictoe from "../assets/tictoe.png";
import movie from "../assets/moviea.png";
import favorite from "../assets/favorite.png";
import todolist from "../assets/todolist.png";



export default function MyProject() {
  return (
    <div className="bg-project d-flex flex-column justify-content-center text-center">
      
      <h1>
     
        <b>MY PROJECTS</b>
      </h1>
      <h2>All About My Work</h2>
      
      <div className="d-flex justify-content-around my-3">
        {/* -------------------
          PROJECT 1
        -----------------------*/}
        <div className="">
          <div className="card mb-4" style={{ width: "18rem" }}>
            <img src={tictoe} className="card-img-top" alt="Tic Tac Toe" />
            <div className="card-body">
              <h5 className="card-title">Tic Tic Toe</h5>
              <a
                href="https://github.com/tuyetsuong29/newtictoe"
                className="btn btn-primary  btn btn-info"
              >
                My Github
              </a>
            </div>
          </div>
          {/* -------------------
          PROJECT 2
          -----------------------*/}
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={favorite}
              className="card-img-top"
              alt="fAVOURITE PROJECT"
            />
            <div className="card-body">
              <h5 className="card-title">Favorite  App</h5>
              <a
                href="https://github.com/tuyetsuong29/Favorite-app"
                className="btn btn-primary  btn btn-info"
              >
                My Github
              </a>
            </div>
          </div>
        </div>
        {/* -------------------
          PROJECT 3
        -----------------------*/}
        <div className="">
          <div class="card mb-4" style={{ width: "18rem" }}>
            <img src={movie} class="card-img-top" alt="Movie app" />
            <div class="card-body">
              <h5 class="card-title">Movie</h5>
              <a
                href="https://github.com/tuyetsuong29/movieapp"
                class="btn btn-primary btn btn-info"
              >
                My Github
              </a>
            </div>
          </div>
          {/* -------------------
          PROJECT 4
         -----------------------*/}
          <div class="card" style={{ width: "18rem" }}>
            <img src={todolist} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">To Do List</h5>
              <a
                href="https://github.com/tuyetsuong29/google"
                class="btn btn-primary btn btn-info"
              >
                My Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
