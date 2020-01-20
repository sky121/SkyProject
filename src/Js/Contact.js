import React from "react";
import ReactDOM from "react-dom";
import Particles from "react-particles-js";
import Navbar from "./Navbar.js";
import "../Css/Contact.css";
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fname: "", lname: "", email: "", message: "" };
  }
  handleFormSubmit = e => {
    this.setState({
      mailSent: true
    });
  };
  render() {
    return (
      <div>
        <p className="form__title">Contact Me</p>
        <form action="#" className="form__group">
          <input
            className="form__field"
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
            value={this.state.fname}
            onChange={e => this.setState({ fname: e.target.value })}
          />

          <input
            className="form__field"
            type=" text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
            value={this.state.lname}
            onChange={e => this.setState({ lname: e.target.value })}
          />

          <input
            className="form__field"
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />

          <textarea
            className="form__field"
            id="message"
            name="message"
            placeholder="Write something.."
            onChange={e => this.setState({ message: e.target.value })}
            value={this.state.message}
          ></textarea>
          <input
            className="form__submit"
            type="submit"
            onClick={e => this.handleFormSubmit(e)}
            value="Submit"
          />
        </form>
      </div>
    );
  }
}

export default Contact;
