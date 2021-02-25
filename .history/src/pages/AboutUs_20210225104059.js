import React from "react";
import Footer from "../components/Footer";
import AboutSi from "../components/AboutSi";

// Google Analytics Code

import ReactGA from 'react-ga';
ReactGA.initialize('G-QV5LQXQLT2');

ReactGA.pageview(window.location.pathname + window.location.search);

// Google Analytics Code End

export default function AboutUs() {
  return (
    <> 
      <AboutSi />
      <Footer />
      </>
  );
}
