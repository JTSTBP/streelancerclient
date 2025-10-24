import React from 'react';
import card2img from "../../../../images/card2img.png"


const Card2 = () => {
  return (
    <div className="hiring-card dei-badge-card">
      <h3> ATTRACT TOP DIVERSE TALENT</h3>
      <p>
       Candidates are watching.
       <br/>Prove your workplace is inclusive, equitable, and empowering.
      </p>

      <div className="application-stats">
        <div className="stat-row">
          <span>📈 Applications from women</span>
          <span className="stat-percent">+32%</span>
        </div>
        <div className="stat-row">
          <span>📈 Applications from LGBTQ+</span>
          <span className="stat-percent">+47%</span>
        </div>
        <div className="stat-row">
          <span>📈 Applications from persons with disabilities</span>
          <span className="stat-percent">+28%</span>
        </div>
      </div>

      <div className="icon-circle">
      <img className="target-icon" src={card2img}/>
      </div>
    </div>
  );
};

export default Card2;
