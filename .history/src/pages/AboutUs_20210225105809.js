import React from "react";
import Footer from "../components/Footer";
import AboutSi from "../components/AboutSi";
import MetaTags from 'react-meta-tags'

// Google Analytics Code

import ReactGA from 'react-ga';
ReactGA.initialize('G-QV5LQXQLT2');

ReactGA.pageview(window.location.pathname + window.location.search);

// Google Analytics Code End

export default function AboutUs() {
  return (
    <> 
      <MetaTags>
            <meta id="meta-description" name="description" content="WeedPro-UK - Derby based weed cleaning in Derbyshire and Nottinghamshire, contact us now! Cleaning in Derby and surrounding areas!" />
          </MetaTags>
      <AboutSi />
      <Footer />
      </>
  );
}
