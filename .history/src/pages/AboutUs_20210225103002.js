import React from "react";
import Footer from "../components/Footer";
import AboutSi from "../components/AboutSi"

ReactGA.pageview(window.location.pathname + window.location.search);

export default function AboutUs() {
  return (
    <> 
      <AboutSi />
      <Footer />
      </>
  );
}
