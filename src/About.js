import React from "react";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import "./about.css"
import PartnerProgram from "./components/PartnerProgram";

const About = () => {
  const data = {
    name: "FRONT STORE shop",
    // des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  };
  return (
    <div>
      <div className='about-main flex flex-row items-center '>
        <div className="left-about">
          <HeroSection myData={data} />
        </div>
        <div className="right-about pl-52">
          <img src="images\hero-home1.png" alt="" />
        </div>
      </div>
      <PartnerProgram/>
      <Features />
    </div>
  );
};

export default About;
