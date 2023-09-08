import React from "react";
import HeroSection from "./components/HeroSection";
import "./home.css";
import Partner from "./components/Partner";
import Features from "./components/Features";
import Slick from "./components/Slick";

const Home = () => {
  const data = {
    name: "FRONT store",
  };

  return (
    <div className="pt-10">
      <div className="main-home">
        <div className="left">
          <HeroSection myData={data} />
        </div>
        <div className="right">
          <figure className="flex justify-center py-10">
            <img className="imghome2" src="images\hero-home2.png" alt="icon1" />
          </figure>
        </div>
      </div>
      <Slick/>
      <Partner/>
      <Features/>
    </div>
  );
};

export default Home;
