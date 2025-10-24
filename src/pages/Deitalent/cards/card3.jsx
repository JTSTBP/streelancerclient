import React from 'react';
import icon1 from "../../../images/choose1.png"
import icon2 from "../../../images/choose2.png"
import icon3 from "../../../images/choose3.png"
import icon4 from "../../../images/choose4.png"
import icon5 from "../../../images/choose5.png"
import icon6 from "../../../images/choose6.png"

const features = [
  {
    title: "Verified Talent Pool",
    desc: "Access 10,000+ pre-vetted women professionals—across industries, experience levels, and seniority tiers.",
    icon: icon1
  },
  {
    title: "DEI-First & Compliant",
    desc: "Our platform meets comprehensive DEI standards and provides employer certification badges, helping you showcase real commitment to inclusion.",
    icon: icon2
  },
  {
    title: "Smart Workdays. Real Impact",
    desc: "Our 4-hour workday model promotes higher productivity, stronger retention, and better work-life balance—tailored for modern teams.",
    icon: icon3
  },
  {
    title: "Only Quality Roles",
    desc: "We use a 5-step vetting process to ensure every opportunity is legitimate, verified, and purposeful—benefiting both talent and employers.",
    icon: icon4
  },
  {
    title: "Fully Managed. Zero Hassle.",
    desc: "We take care of onboarding, coordination, and streamlined delivery—so you stay focused on core business goals while scaling inclusively.",
    icon: icon5
  },
  {
    title: "Impact You Can Measure",
    desc: "Get access to monthly DEI dashboards that track your inclusive hiring progress and communicate it to internal and external stakeholders.",
    icon: icon6
  }
];

const WhyChooseUs = () => {
  return (
    <div className="why-container">
      <div className="why-left">
        <h2>Why Choose Streelancer</h2>
        <p className="why-subtext">
          Build Diverse, Flexible Teams—Backed by a Platform That Does the Heavy Lifting
        </p>

        <div className="why-cards">
          {features.map((item, idx) => (


<div className="dei-badge-card " key={idx}>
        <h3>{item.title}</h3>
                <p>{item.desc}</p>
      <div className="icon-circle">
           <img className="target-icon" src={item.icon}/>
           </div>
    </div>
            
           
          ))}
        </div>
      </div>

      {/* <div className="why-right">
        <div className="why-box">
          <h1 className="why-title">WHY</h1>
          <div className="vertical-text">CHOOSE US?</div>
          <div className="dots">
            {[...Array(5)].map((_, i) => (
              <div className="dot" key={i}></div>
            ))}
          </div>
        </div>
      </div> */}
      <div className='union'>
        <img src={require("../../../images/Union.png")}/>
          <div className='text'>
           <h1>WHY</h1>
          <ul><li>C</li><li>H</li><li>O</li><li>O</li><li>S</li><li>E</li><li>U</li><li>S</li><li>?</li></ul>
        </div>
      </div>

      {/* <div className='shape-box'>
      
       
        <div className='m'></div>
      </div> */}
    </div>
  );
};

export default WhyChooseUs;

