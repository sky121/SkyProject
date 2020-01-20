import React from "react";
import ReactDOM from "react-dom";
import Particles from "react-particles-js";
import Navbar from "./Navbar.js";
import "../Css/About.css";
import ReactRain from "react-rain-animation";
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main">
        <p className="about__title">About</p>
        <div className="about">
          Discover the weather around the world through interactive website
          design!
          <ReactRain numDrops="200" />
        </div>
      </div>
    );
  }
}

export default About;
