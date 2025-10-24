import React from "react";

import houseIcon from "../../../images/industriesweserve.jpg";
import Bank from "../../../images/ser1.png"
import ShoppingCart from "../../../images/ser2.png"
import HeartPulse from "../../../images/ser3.png"
import Truck from "../../../images/ser4.png"
import Laptop from "../../../images/ser5.png"
import GraduationCap from "../../../images/ser6.png"
import ShoppingBag from "../../../images/ser7.png"

const industries = [
  {
    title: "Manufacturing & EMS ",
    description: "Roles: Documentation • Backend Coordination • Customer Support",
    icon: Bank 
  },
  {
    title: "FMCG",
    description: "Roles: Sales Support • Inventory Management • Customer Engagement",
    icon: ShoppingCart 
  },
  {
    title: "Healthcare & Pharmaceuticals",
    description: "Roles: Teleconsultation Support • Claims Processing • Regulatory Documentation",
    icon: HeartPulse
  },
  {
    title: "Logistics, Infrastructure & Construction",
    description: "Roles: Ticket Desk • Route Support • Virtual Admins",
    icon: Truck
  },
  {
    title: "Startups, SaaS & Tech",
    description: "Roles: Content Moderation • Lead Generation • CRM Hygiene • Email/Chat Support",
    icon: Laptop
  },
  
];

const IndustriesSection = () => {
  return (
    <section className="industries-section">
      <h2 className="industries-title">Industries We Serve</h2>
      <p className="industries-subtitle">
       Our women workforce brings specialized skills to every sector—with zero infra burden and full flexibility.
      </p>

      <div className="industries-content">
        <div className="industries-image">
          <img src={houseIcon} alt="Light Bulb Illustration" />
        </div>

        <div className="industries-cards">
          {industries.map((industry, index) => (
            <div className="industry-card" key={index}>
                <div>
                      <img src={industry.icon}/>
       
              <h4 className="card-title">{industry.title}</h4>
                </div>
              
              <p className="card-description">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
