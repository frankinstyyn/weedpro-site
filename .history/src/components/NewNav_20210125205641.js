import React, { Component } from "react";
import logo from "../images/weedProLogo.svg";
import { Nav, Navbar } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"
import { HashLink as Link } from 'react-router-hash-link';
import { Link, animateScroll as scroll } from "react-scroll";

export default class NewNav extends Component {
    state = {
        isOpen: false
    };
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    componentDidMount() {
        window.addEventListener("scroll", this.resizeHeaderOnScroll);
        window.addEventListener("scroll", this.navTransparent);
        window.addEventListener("scroll", this.navShadow);
    };
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

    }
  
    navShadow() {
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
        return <div className="myContainer">
            <Navbar id="navbar" className="newNav" expand="lg">
            <Navbar.Brand href="/"><img id="logo" src={logo} alt="Weed Pro UK"/></Navbar.Brand>
            <Navbar.Toggle className="custom-toggler" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link id="nav-links" href="/#ourServices">Services</Nav.Link>
                    <Nav.Link href="/#waysOfWorking">Ways of Working</Nav.Link>
                    <Nav.Link href="/#completedWork">Completed Work</Nav.Link>
                    <Nav.Link href="/#equipment">Equipment</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>

                    </Navbar.Collapse>
        </Navbar>
            </div>
    
    }
}