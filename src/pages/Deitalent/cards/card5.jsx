import React from "react";
import inset1 from "../../../images/inser1.png"
import inset2 from "../../../images/inser2.png"
import inset3 from "../../../images/inser3.png"
import inset4 from "../../../images/inser4.png"

import line1 from "../../../images/inline1.png";
import line2 from "../../../images/inline2.png";
import line3 from "../../../images/inline3.png";

import map from "../../../images/mapping.png";


const steps = [
  {
    number: 1,
    title: "Share Your Need",
    description: "Fill out our requirement form or schedule a free consultation to discuss your hiring needs",
    image: inset1,
    
  },
  {
    number: 2,
    title: "We Shortlist & Onboard",
    description: "Our team identifies the best candidates and completes the onboarding process in 5-7 days",
    image:inset2,
    givclass:"up"
  },
  {
    number: 3,
    title: "You Manage Work",
    description: "Focus on your core business while we handle administrative and coordination tasks",
    image: inset3,
  },
  {
    number: 4,
    title: "Track Impact",
    description: "Monitor performance and DEI impact through our comprehensive monthly dashboards",
    image: inset4,
    givclass:"up"
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2 className="how-it-works-title">How It Works</h2>
      <p className="how-it-works-subtitle">
        Hiring Diverse Talent—Made Simple, Seamless & Scalable
      </p>
      <img src={map} className="mapping"/>
      
      {/* <div className="graph-container">
       

        {steps.map((step, index) => (
          <>
          <div className={`${step.givclass} graph-step`} key={step.number}>
            <div className="graph">
            <div className="graph-circle">
              <img src={step.image} alt={`graph-Step ${step.number}`} />
              <span className="graph-step-number">{step.number}</span>
            </div>
            </div>
            <h3 className="graph-step-title">{step.title}</h3>
            <p className="graph-step-desc">{step.description}</p>
            </div>
          
         
      {index === 0 && (
        <img src={line1} alt="line1" className="connector-line-image line1" />
      )}
      {index === 1 && (
        <img src={line2} alt="line2" className="connector-line-image line2" />
      )}
      {index === 2 && (
        <img src={line3} alt="line3" className="connector-line-image line3" />
      )}
      
      </>
        ))}
      

      </div> */}



    </section>
  );
};

export default HowItWorks;
