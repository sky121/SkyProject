import React from "react";
import "../Css/Background.css";
import clear from "../images/clear.png";
import clouds from "../images/clouds.jpeg";
import rain from "../images/rain.jpg";
import Thunderstorm from "../images/thunderstorm.jpg";
import Drizzle from "../images/drizzle.jpg";
import Snow from "../images/snow.jpg";
import Mist from "../images/mist.jpg";
import Smoke from "../images/smoke.jpeg";
import Haze from "../images/haze.jpg";
import Dust from "../images/dust.jpg";
import Fog from "../images/fog.jpg";
import Sand from "../images/sand.jpg";
import Ash from "../images/ash.jpeg";
import Squall from "../images/squall.jpg";
import Tornado from "../images/tornado.jpg";
import "../Css/index.css";
class BackgroundImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      background: null
    };
  }

  componentDidMount() {
    const { weather } = this.props.weatherData;

    let i = 0;
    if (weather[i].main === "Clear") {
      this.setState({
        background: clear
      });
    } else if (weather[i].main === "Thunderstorm") {
      this.setState({
        background: Thunderstorm
      });
    } else if (weather[i].main === "Drizzle") {
      this.setState({
        background: Drizzle
      });
    } else if (weather[i].main === "Snow") {
      this.setState({
        background: Snow
      });
    } else if (weather[i].main === "Mist") {
      this.setState({
        background: Mist
      });
    } else if (weather[i].main === "Smoke") {
      this.setState({
        background: Smoke
      });
    } else if (weather[i].main === "Haze") {
      this.setState({
        background: Haze
      });
    } else if (weather[i].main === "Dust") {
      this.setState({
        background: Dust
      });
    } else if (weather[i].main === "Fog") {
      this.setState({
        background: Fog
      });
    } else if (weather[i].main === "Sand") {
      this.setState({
        background: Sand
      });
    } else if (weather[i].main === "Ash") {
      this.setState({
        background: Ash
      });
    } else if (weather[i].main === "Squall") {
      this.setState({
        background: Squall
      });
    } else if (weather[i].main === "Tornado") {
      this.setState({
        background: Tornado
      });
    } else if (weather[i].main === "Rain") {
      this.setState({
        background: rain
      });
    } else if (weather[i].main === "Clouds") {
      this.setState({
        background: clouds
      });
    }
  }

  render() {
    const { background } = this.state;

    return (
      <div
        style={{
          backgroundImage: `url(${background})`,
          marginTop: "-5%",
          height: "110%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      ></div>
    );
  }
}

export default BackgroundImage;
