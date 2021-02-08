import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
    <Hero hero="defaultHero" >
      <Banner title="WeedPro UK" subtitle="Simon - WeedPro UK">
        </Banner>
      </Hero>
      <Footer />
      </>
  );
}
