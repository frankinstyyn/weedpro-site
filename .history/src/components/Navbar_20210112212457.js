import React, { Component } from "react";
import logo from "../images/logo.png";
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

  render() {
    return <nav className="navbar">
      <div class="nav-center">
        <div class="nav-header">
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
