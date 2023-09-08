import React from "react";
import "./heroSection.css"
import { NavLink } from 'react-router-dom';
import {Link} from "react-scroll"

const HeroSection = ({myData}) => {
  const {name}=myData
  return (
    <div className="main-herosection mr-10 ">
      <div className="flex flex-col text-left pl-32  ">
        <h1 className="pt-10 text-8xl font-bold text-primary uppercase ">{name} </h1>
        <h2 className="pt-10 text-primary2 font-bold uppercase text-4xl">Only destination for shopping</h2>
        <p className="text-justify py-10"> Front Store is not just a name, it's a destination for quality and convenience. Nestled in the heart of our community, Front Store is your one-stop shop for all your needs. We take pride in offering a wide array of products, carefully curated to cater to every aspect of your life.</p>
        <Link to="main-features" smooth="true" duration={1000}>

          <button className="button">Show More</button>
        </Link>
      </div>

    </div>
  );
};

export default HeroSection;
