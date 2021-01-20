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
            <img src={logo} alt="Derby Golf Centre" />
          </Link>
        </div>
      </div>
    </nav>;
  }
}
