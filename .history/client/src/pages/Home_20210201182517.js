import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services"
import Footer from "../components/Footer";
import WaysOfWorking from "../components/WaysOfWorking";
import CompletedWork from "../components/CompletedWork"

export default function Home() {
  return (
    <>
    <Hero  id="msgBg" hero="defaultHero" >
      <Banner title="WeedPro UK" subtitle="Unique Block Paving Cleaning System">
        <Link to="/services" className="btn-primary">
          Services
      </Link>
      </Banner>
      </Hero>
      <Services />
      <WaysOfWorking />
      <CompletedWork />
      <Footer />
      </>
  );
}
