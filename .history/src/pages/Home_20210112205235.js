import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services"
import Maps from "../components/Maps"

export default function Home() {
  return (
    <>
    <Hero hero="defaultHero" >
      <Banner title="Nigel James Consulting" subtitle="Information Made Simple">
        <Link to="/lesson" className="btn-primary">
          Services
      </Link>
      </Banner>
      </Hero>
      <Services />
      <Maps />
      </>
  );
}
