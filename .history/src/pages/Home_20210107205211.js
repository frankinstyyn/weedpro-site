import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Hero hero="homeHero" >
    <Banner title="Driving Range" subtitle="First class Driving Range in Derby">
      <Link to="/rooms" className="btn-primary">
        Services
      </Link>
    </Banner>
  </Hero>
  )
}
