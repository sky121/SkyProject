import React from "react";
import ReactDOM from "react-dom";
import "./Css/index.css";
import Navbar from "./Js/Navbar.js";
import * as serviceWorker from "./Js/serviceWorker";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Particles from "react-particles-js";
import bg from "./images/skyBackground.jpg";
const particleOpt = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: bg
    };
  }
  render() {
    const { imageUrl } = this.state;
    return (
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
          position: "absolute",
          overflow: "scroll",
          backgroundSize: "cover", //cover allows the entire image to scale and show in the background! makes it not cut off
          width: "100%",
          height: "100%"
        }}
      >
        <div className="Navbar">
          <Navbar bg={bg} />
        </div>
        <div>
          <Particles params={particleOpt} />
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
