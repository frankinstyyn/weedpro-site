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
          <button type="button" className="nav-btn">
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
      </div>
    </nav>;
  }
}
