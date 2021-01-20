import React from "react";
import Hero from "../components/Hero"
import Banner from "../components/Banner"

export default function Home() {
  return <Hero>
    <Banner title="Driving Range" subtitle="First class Driving Range in Derby">
      <Link to="/rooms" className="btn-primary">
        Services
      </Link>
    </Banner>
  </Hero>
}
