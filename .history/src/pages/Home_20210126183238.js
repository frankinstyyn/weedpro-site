import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services"
// import Maps from "../components/Maps"
import Footer from "../components/Footer";
import WaysOfWorking from "../components/WaysOfWorking";

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
      <WaysOfWorking />
      {/* <Maps /> */}
      <Footer />
      </>
  );
}
