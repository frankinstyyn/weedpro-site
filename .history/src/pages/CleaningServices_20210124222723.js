import React from "react";
import Hero from "../components/Hero"
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services2";
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
    <Hero hero="servicesHero">
      <Banner title="Consultancy Services" subtitle="Improving your business strategy, professionally">
        <Link to="/cleaning-services" className="btn-primary">
          Learn More
      </Link>
      </Banner>
      </Hero>
      {/* <Services /> */}
      <Footer />
      </>
  );
};
