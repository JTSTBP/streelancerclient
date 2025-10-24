import React from "react";
import imgvision from "../../../images/imgvision.png"
import imgmission from "../../../images/imgmission.png"
import arrow from "../../../images/rearrow.png"
import arrow1 from "../../../images/rearrow2.png"

const OurVisionMission = () => {
  return (
    <div>

    
    <div className="ourvision-mission">
    <div className="image-overlay-container">
      <div className="purple-bg"></div>
      <img
        src={imgvision} /* Replace with your image path */
        alt="Women working together"
        className="main-image"
      />
    </div>
    <div className="vision-text">
        <img src={arrow}/>
        <h2>Our Vision</h2>
        <p>To create a world where every skilled woman — whether a returnee, caregiver, LGBTQ+ individual, or PwD — has equal access to meaningful, flexible, and remote career opportunities. We envision a future where women can thrive professionally without compromising personal responsibilities, and where inclusion is embedded in how the world works.</p>
    </div>
    </div>
     <div className="ourvision-mission mission">
        <div className="vision-text">
        <img src={arrow1}/>
        <h2>Our Mission</h2>
        <p>To empower women by building India’s most trusted, fully managed remote talent ecosystem. We connect businesses with pre-vetted, remote-ready women professionals across recruitment, marketing, sales, content, and more — enabling companies to scale smarter while advancing real diversity, equity, and inclusion at work.</p></div>
    <div className="image-overlay-container">
      <div className="pri-bg"></div>
      <img
        src={imgmission} /* Replace with your image path */
        alt="Women working together"
        className="main-image"
      />
    </div>
    
    </div>
    </div>
  );
};

export default OurVisionMission;

