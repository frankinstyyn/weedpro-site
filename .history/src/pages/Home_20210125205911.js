import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
// import { Link } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import Services from "../components/Services"
// import { HashLink as Link } from 'react-router-hash-link';
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
    <Hero hero="defaultHero" >
      <Banner title="WeedPro UK" subtitle="Unique Block Paving Cleaning System">
        <Link to="/services" className="btn-primary">
          Services
      </Link>
      </Banner>
      </Hero>
      <Services />
      {/* <Maps /> */}
      <Footer />
      </>
  );
}
