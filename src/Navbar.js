import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";
import {
  Redirect,
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Logo from "./images/SPlogo.png";
import Home from "./Home.js";
import Contact from "./Contact.js";
import About from "./About.js";

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    //Redirect allows for when the page loaded to be instantly directed to the home page
    return (
      <Router>
        <MDBNavbar
          transparent
          color="light blue"
          dark
          expand="md"
          style={{ marginTop: "0%" }}
        >
          <MDBNavbarBrand href="#">
            <img src={Logo} height="30" alt="" />
          </MDBNavbarBrand>

          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem active>
                <MDBNavLink to="/home">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/contact">Contact</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/about">About</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
        <div>
          <Route path="/home" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Redirect exact from="/" to="/home" />
        </div>
      </Router>
    );
  }
}

export default NavbarPage;
