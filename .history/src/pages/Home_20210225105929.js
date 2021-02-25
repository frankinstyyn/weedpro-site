import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services"
import Footer from "../components/Footer";
import WaysOfWorking from "../components/WaysOfWorking";
import CompletedWork from "../components/CompletedWork"
import Equipment from "../components/Equipment";
import MetaTags from 'react-meta-tags'

// Google Analytics Code

import ReactGA from 'react-ga';
ReactGA.initialize('G-QV5LQXQLT2');

ReactGA.pageview(window.location.pathname + window.location.search);

// Google Analytics Code End

export default function Home() {
  return (
    <>
      <MetaTags>
            <title>WeedPro-UK | Weed Cleaning in Derby and Nottingham</title>
            <meta id="meta-description" name="description" content="WeedPro-UK - Derby based professional outdoor cleaning in Derbyshire and Nottinghamshire, contact us now! Cleaning in Derby and surrounding areas!" />
          </MetaTags>
    <Hero hero="defaultHero" >
      <Banner title="WeedPro UK" subtitle="Unique Block Paving Cleaning System">
        <Link to="/services" className="btn-primary">
          Services
      </Link>
        </Banner>
      </Hero>
      <Services />
      <WaysOfWorking />
      <CompletedWork />
      <Equipment />
      <Footer />
      </>
  );
}
