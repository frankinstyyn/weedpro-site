import React, { Component } from "react";
import { IoGolf } from "react-icons/io5";
import logo from "../images/sdrlogo.jpeg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  }
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    return <nav className="navbar">
      <div class="nav-center">
        <div class="nav-header">
          <Link to="/">
            <img className="logo" src={logo} alt="Derby Golf Centre" />
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
            <Link to="/lesson">Book a Lesson</Link>
          </li>
          <li>
            <Link to="/opening-times">Opening Times</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/driving-range">Driving Range</Link>
          </li>
        </ul>
      </div>
    </nav>;
  }
}
