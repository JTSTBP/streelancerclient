import React from 'react';
import bigCircle from '../../../images/remotecircle.jpg';
// import smallCircle from '../../../images/smallCircle.png';
import arrowCircle from '../../../images/arrow.png';

const GlobalFlexFeatures = () => {
  return (
    <div className="flex-features-container">
      <div className="left-section">
        <img src={arrowCircle} alt="Big Circle" className="big-circle" />
        <h2>Why Hire With Us</h2>
        <p>
       BUILD YOUR DREAM TEAM IN 72 HOURS — AND SAVE UP TO 40%
No Compromise. Just Verified Talent. Fully Managed. DEI-Aligned.
        </p>

        <div className="image-stack">
          <img src={bigCircle} alt="Big Circle" className="big-circle" />
          {/* <img src={smallCircle} alt="Small Circle" className="small-circle" /> */}
         
        </div>
      </div>

      <div className="right-section">
  <div className="feature-item">
    <h3> 1. Managed Service</h3>
    <p>
      We HIRE, ONBOARD & MANAGE your team — end-to-end.
    </p>
  </div>
  <div className="feature-item">
    <h3> 2. Flexible Hiring</h3>
    <p>
   Full-Time. Project-Based. Fractional.
Total Flexibility. Zero Friction.

    </p>
  </div>
  <div className="feature-item">
    <h3> 3. Cost Savings</h3>
    <p>
     Save up to 40% vs in-house hiring — without cutting corners.
    </p>
  </div>
  <div className="feature-item">
    <h3>4. Quick Start</h3>
    <p>
      Ready-to-work talent in just 72 HOURS.
Trained. Vetted. 

    </p>
  </div>
</div>

    </div>
  );
};

export default GlobalFlexFeatures;
