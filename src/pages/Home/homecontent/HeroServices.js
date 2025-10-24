// HeroServices.js
import React from 'react';
import './homecontent.css';
import ServiceCard from './herocard';

import img1 from "../../../images/offer1.png"
import img2 from "../../../images/offer2.png"
import img3 from "../../../images/offer3.png"



function HeroServices() {
  return (
    <section className="hero-services">
      <h2 className="hero-title">Your Strategic Advantage
</h2>
      <p className="hero-subtitle">
       Hire smarter • Upskill faster • Measure impact — all under one roof
      </p>

      <div className="services-grid">
       
 <ServiceCard
          title="DEI Impact Dashboard"
          className="bluecard"
          // subtitle="Score Card"
          points={[
          
            "Get real-time inclusion analytics + actionable improvement plans"
          ]}
          
           mainImage={img1}
       navigateTo="/DEITalent"
          altText="Marketplace"
        />

        <ServiceCard
          title="On-Demand Talent Network"
          className="pinkcard gap-ordcard"
          // subtitle="Talent Network"
          points={[
            "72-hour access to pre-vetted women professionals (zero hiring friction",
           
          ]}
          
           mainImage={img2}
      navigateTo="/Remotetalent"
          altText="Marketplace"
        />
       
                <ServiceCard
          title="Skills Accelerator"
          className="orgcard"
          // subtitle="Learn New Skills"
          points={[
            
            "Upskill teams for in-demand roles with 94% placement success"
          ]}
      
          mainImage={img3}
          
       navigateTo="/Academy"
          altText="Academy"
        />
     
      </div>
    </section>
  );
}

export default HeroServices;
