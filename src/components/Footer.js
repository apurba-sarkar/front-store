import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="main-footer uppercase">
     
      <div className="fo">
        <div > 
          <NavLink to="/">
            <img className="logo-footer" style={{height:"20rem"}} src="images\herologo.png" alt=""></img>
          </NavLink>
        </div>
        <div>
          <div className="text-primary2 underline">Explore</div>
          <div>Home</div>
          <div>About</div>
          <div>Capabilities</div>
          <div>Carrers</div>
        </div>
        <div>
          <div  className="text-primary2 underline">Visit</div>
          <div>sample address</div>
          <div>po box kolkta:00000</div>
          <div>india</div>
        </div>
        <div>
          <div  className="text-primary2 underline">Follow</div>
          <div>Instagram</div>
          <div>Twitter</div>
          <div>Linkdin</div>
        </div>
        <div>
          <div  className="text-primary2 underline">Legal</div>
          <div>Terms</div>
        
          <div>Privacy</div>
        </div>
        <div>
        
        <div  className="text-primary2 underline">Reach us</div>
          <div>contact: 00000000</div>
          <div>mail to : xyz@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
