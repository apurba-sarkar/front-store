import React from "react";
import "./features.css";
import { SlBadge } from "react-icons/sl";
import { TbTruckReturn } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";

const Features = () => {
  const featured = [
    {
      id: 1,
      name: "Quality products & Best Price",
      logo: <SlBadge size={60} />,
    },
    {
      id: 2,
      name: "Easy Return & Customization",
      logo: <TbTruckReturn size={60} />,
    },
    {
      id: 3,
      name: "Free Delivery, Installation & Maintainance",
      logo: <TbTruckDelivery size={60} />,
    },
    {
      id: 4,
      name: "Our Impressive Customer Suport",
      logo: <MdOutlineSupportAgent size={60} />,
    },
  ];
  return (
    <div className="main-features">
      <div>
        <h2 className="fa-h2">Find Out Why This Is the Only For You</h2>
      </div>
      <div className="py-10 main-container">
        {featured.map((items, id) => {
          return (
            <div key={id} className="fa-container">
              <div className="fa-logo">{items.logo}</div>
              <h1 className="fa-text">{items.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
