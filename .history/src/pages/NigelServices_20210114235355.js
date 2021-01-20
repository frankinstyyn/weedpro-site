import React from "react";
import Hero from "../components/Hero"
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
    <Hero hero="servicesHero">
      <Banner title="Consultancy Services" subtitle="">
        <Link to="/nigelservices" className="btn-primary">
          Learn More
      </Link>
      </Banner>
      </Hero>
      <Services />
      </>
  );
};
