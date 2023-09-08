import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <div className="main">
      <div className="main-nav1">
        <NavLink to="/">

        <figure >
          <img  style={{ height: "15rem" }} src="images\herologo.png" alt="" />
        </figure>
        </NavLink>
      </div>
      <div>
        <div className="main-nav2">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/cart" className="cart">
            Cart <span className="cart-number">10</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
