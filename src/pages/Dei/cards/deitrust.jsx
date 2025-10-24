import React from 'react';
import girlImage from '../../../images/certificate.png'; // replace with your image path
import step1 from "../../../images/trust1.png"

import step2 from "../../../images/trust3.png"
import step3 from "../../../images/trust2.png"


const Deitrust = () => {
  const steps = [
    {
      title: 'Boost Your Reputation & Employer Brand',
      description:
        'Show the world you\'re serious about inclusion with a recognized, trusted DEI Badge.' ,
       color:"#ECEAEA",
       img:step1
    },
    {
      title: 'Attract Top Talent',
      description:
        'Inclusive workplaces win. Certification helps you attract diverse, high-performing teams.',
        color:"#F1D3D0",
          img:step2
    },
    {
      title: 'Stand Out In The Market',
      description:
        'Position your brand as a forward-thinking, inclusive leader—and rise above the noise.',
         color:"#ECEAEA"
         ,  img:step3
    },
  
  ];

  return (
    <div className="howitworks-container dei-trust">
        <h1>Join A Trusted Network Of DEI-Commited Employers</h1>
        <p className="subtitle">
       Get listed in Certified DEI Employer Directories—boost visibility, build trust, and lead with purpose.
        </p>
        <div className='howitworks-content'>
         <div className="howitworks-image">
        <img src={girlImage} alt="Girl with laptop" />
      </div>
      <div className="howitworks-text">
        <h1 className='why'>WHY GET CERTIFIED?</h1>
        <div className="steps">
          {steps.map((step, index) => (
            <div className="step-box" key={index}  style={{ backgroundColor: step.color }}>
              <div className="step-number"><img src={step.img}/></div>
              <div className="step-content">
                <h1>{step.title}</h1>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
     </div>
    </div>
  );
};

export default Deitrust;
