import React, { Component } from "react";
import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  }
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
    window.addEventListener("scroll", this.navTransparent);
    window.addEventListener("scroll", this.navShadow);
  }
  resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 100,
      headerEl = document.getElementById("logo");
    if (distanceY > shrinkOn) {
      headerEl.classList.add("logoShrink");
      
    } else {
      headerEl.classList.remove("logoShrink");
    }
  }

  navTransparent() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 100,
      headerEl = document.getElementById("navbar");
    if (distanceY > shrinkOn) {
      headerEl.classList.add("navbarBg");
      
    } else {
      headerEl.classList.remove("navbarBg");
    }

  }navShadow() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 100,
      headerEl = document.getElementById("navbar");
    if (distanceY > shrinkOn) {
      headerEl.classList.add("navShadow");
      
    } else {
      headerEl.classList.remove("navShadow");
    }
  }
  render() {
    return <nav id="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img id="logo" src={logo} alt="Nigel James Consulting" />
          </Link>
          <button type="button" className="nav-btn" onClick={this.handleToggle}>
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/nigelservices">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>;
  }
}
