import React from "react";
import ReactDOM from "react-dom";
import "./Home.css";

import SearchBar from "./Search.js";
import Navbar from "./Navbar.js";
import Title from "./images/SkyProjektsLogo.png";
import BackgroundImage from "./Background.js";
import Fade from "react-reveal/Fade";
import About from "./About.js";
import config from "./config.js";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: [],
      geocode: [],
      tempLoaded: false,
      locLoaded: false,
      location: "",
      error: null,
      my_key1: config.MY_KEY1,
      my_key2: config.MY_KEY2
    };
    this.onPlaceLoaded = this.onPlaceLoaded.bind(this);
  }

  async onPlaceLoaded(place) {
    this.setState({
      location: place,
      tempLoaded: false,
      locLoaded: false
    });
    this.getGeocode();
  }

  async getGeocode() {
    let location = this.state.location;
    const response = await fetch(
      "https://maps.googleapis.com/maps/api/geocode/json?address=" +
        location +
        "&key=" +
        this.state.my_key1
    );
    const json = response.ok ? await response.json() : null;
    if (!json) {
      this.setState({ error: "Something went wrong" });
    }

    this.setState(
      {
        geocode: json,
        locLoaded: true
      },
      this.getTemp
    );
  }
  async getTemp() {
    let key = this.state.my_key2;
    let unit = "imperial";
    let results = this.state.geocode.results;
    let lat;
    let long;
    if (results && results.length > 0) {
      lat = results[0].geometry.location.lat;
      long = results[0].geometry.location.lng;

      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
          lat +
          "&lon=" +
          long +
          "&units=imperial" +
          "&appid=" +
          key
      );
      const json = response.ok ? await response.json() : null;
      if (!json) {
        this.setState({ error: "Something went wrong" });
      }

      this.setState({
        weatherData: json,
        tempLoaded: true
      });
    }
  }

  render() {
    const { tempLoaded, weatherData, error } = this.state;
    if (error) {
      return <p>{error.message}</p>;
    }

    return (
      <div>
        <div className="Title">
          <img src={Title} alt="Title" />
        </div>

        {tempLoaded && weatherData.weather && (
          <Fade duration={5000}>
            <div className="Background">
              <BackgroundImage weatherData={weatherData} />
            </div>

            <div className={"Temp"}>
              Today will be {weatherData.main.temp}℉ with a forcast of{" "}
              {weatherData.weather[0].main}
            </div>
          </Fade>
        )}

        <div className="Search">
          <SearchBar onPlaceLoaded={this.onPlaceLoaded} />
        </div>
      </div>
    );
  }
}

export default Home;
