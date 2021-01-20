import React from "react";
import Hero from "../components/Hero"
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Hero hero="defaultHero" >
      <Banner title="404 Error" subtitle="This page does not exist">
        <Link to="/" className="btn-primary">
          Go Back to Home
      </Link>
      </Banner>
    </Hero>
  );
};

