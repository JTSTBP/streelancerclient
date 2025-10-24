import React from 'react';
import side from "../../../../images/benefitsforcompanies.jpg";
import DEIBadge from './card1';
import HiringImpactVisibility from './card2';
import Card2 from './card2';
import Card3 from './crad3';


const Deibenifits = () => {
  return (
    <div className="benefits-container">
      <h2 className="benefits-heading">Benefits for Companies</h2>
      <p className="benefits-subheading">
       Turn Inclusion Into Impact — Showcase your DEI commitment with tangible, visible credentials.
      </p>
      <div className="benefits-content">
        <div className="benefits-image">
          <img src={side} alt="Documents illustration" />
        </div>
        <div className="benefits-cards">
       
          <DEIBadge/>
<Card2/>
<Card3/>
         
        </div>
      </div>
    </div>
  );
};

export default Deibenifits;
