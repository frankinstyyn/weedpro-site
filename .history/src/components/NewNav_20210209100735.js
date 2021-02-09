import React, { Component } from "react";
import logo from "../images/weedProLogo.svg";
import { Nav, Navbar } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"
import { HashLink as Link } from 'react-router-hash-link';


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
            <Navbar collapseOnSelect id="navbar" className="newNav" expand="lg">
                        <Link
                            activeClass="active"
                            to="/#totop"
                            spy={true}
                            smooth={true}
                        >
                <Navbar.Brand href="/"><img id="logo" src={logo} alt="Weed Pro UK" /></Navbar.Brand>
                </Link>
            <Navbar.Toggle className="custom-toggler" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                        <Link
                            activeClass="active"
                            to="/#ourServices"
                            spy={true}
                            smooth={true}
                        >
                            <Nav.Link eventKey="1" as={Link} id="nav-links" to="/#ourServices">Services</Nav.Link>
                        </Link>
                    <Link
                            to="/#waysOfWorking"
                            spy={true}
                            smooth={true}
                        >
                            <Nav.Link href="/#waysOfWorking">Ways of Working</Nav.Link>
                            </Link>
                        <Link
                            to="/#completedWork"
                            spy={true}
                            smooth={true}
                        >
                            <Nav.Link href="/#completedWork">Completed Work</Nav.Link>
                        </Link>
                        <Link 
                            to="/#equipment"
                            spy={true}
                            smooth={true}
                        >
                            <Nav.Link href="/#equipment">Equipment</Nav.Link>
                        </Link>
                    <Nav.Link href="/About">About</Nav.Link>
                </Nav>

                    </Navbar.Collapse>
        </Navbar>
            </div>
    
    }
}