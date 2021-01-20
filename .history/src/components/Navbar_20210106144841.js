import React, { Component } from "react";
import { IoGolf } from "react-icons/io5";
import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav>
        Hello from Navbar <IoGolf />
      </nav>
    );
  }
}
