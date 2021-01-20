import React from "react";
import Hero from "../components/Hero"
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";

export default function Home() {
  return (
    <Hero hero="lessonHero" >
      <Banner title="Daniel Delaney - PGA Pro" subtitle="Golf lessons with a pro">
        <Link to="/contact-dan" className="btn-primary">
          Contact Dan
      </Link>
      </Banner>
    </Hero>
    <Services />
  );
};
