import React from "react";
import { NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from 'react-icons/fa';

const PartnerProgram = () => {
  const programData = {
    h1: "Partner with Front Store",
    p: "You want to grow your business We're in the growth business. Explor our partner programs, find the one thats right for you, and let's start growing beetter together",
  };
  return (
    <div className="bg-primary2 uppercase py-16 text-white">
      <div>
        <h1 className=" text-7xl font-bold ">{programData.h1}</h1>
        <p className="text-3xl pt-6">
          {" "}
          {programData.p.slice(0, 124)} <br />
          {programData.p.slice(124)}
        </p>
      </div>
      <div className="pt-8 flex items-center justify-center">
        <NavLink to="/collab">
          <button className="button text-4xl flex items-center gap-2">Collab <span><FaLongArrowAltRight/></span></button>
        </NavLink>
      </div>
    </div>
  );
};

export default PartnerProgram;
