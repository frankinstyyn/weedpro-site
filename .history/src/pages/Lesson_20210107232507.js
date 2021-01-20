import React from "react";
import Hero from "../components/Hero"
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Lesson = () => {
  <Hero hero="lessonHero" >
    <Banner title="Daniel Delaney" subtitle="Golf lessons with a pro">
      <Link to="/contact-dan" className="btn-primary">
        Contact Dan
      </Link>
    </Banner>
  </Hero>
};

export default Lesson;
