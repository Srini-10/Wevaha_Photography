import React from "react";
import AboutUs from "../components/About/AboutUs.tsx";
import Navbar from "../Navbar.tsx";
import Collage from "../components/About/Collage.tsx";

const About = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <AboutUs />
        <Collage />
      </div>
    </>
  );
};

export default About;
