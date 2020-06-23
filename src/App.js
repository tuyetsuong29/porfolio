import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import AboutMe from './components/AboutMe';
import MyProject from './components/MyProject';
import Contact from './components/Contact';



function App() {
  return (
    <div>
      <Navigation />
      <Banner />
      <AboutMe />
      <MyProject />
      <Contact />
    </div>
  );
}

export default App;
