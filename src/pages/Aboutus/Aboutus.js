import React, { useEffect } from "react";
import "./Aboutus.css";
import aboutImage from "../../images/hireverifiedtalent.jpg"; // replace with your actual image path
import logo from "../../images/logo2.png"; 
import arrow from "../../images/arrow.png";
import StatsSection from "./cards/statssection";
import OurVisionMission from "./cards/ourvisionandmission";
import VisionSection from "./cards/ourvisionandmission";
import Ourvalue from "./cards/ourvalues";
import CommunityBanner from "../Home/homecontent/CommunityBanner";
import { useLocation, useNavigate } from "react-router-dom";

const AboutUs = () => {
     const navigate=useNavigate()
     const { pathname } = useLocation();

       useEffect(() => {
         window.scrollTo({ top: 0, behavior: "smooth" });
       }, [pathname]);
  return (
    <section className="about-section">
      <div className="about-logo">
    <img src={logo} alt="Streelancer Logo" onClick={()=>navigate("/")}/>
  </div>
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">Hire DEI-Verified Talent</h2>
          <p className="about-subtitle">
            Partner with skilled, diverse women to grow your business while making a real impact.
          </p>
        </div>

        <div className="about-main">
          <div className="about-text">
            <h3 className="about-heading">
              India’s First Women-Only Remote Talent Ecosystem – 
              <span className="highlight"> Fully Managed. Purpose Built. Globally Ready.</span>
            </h3>
            <div className="about-line">
              {/* <span className="dot"></span>
              <span className="line"></span>
              <span className="arrow">→</span> */}
               <img src={arrow} alt="About Streelancer" />
          
            </div>
            <h4 className="about-subheading">About Us</h4>
            <p className="about-description">
              Streelancer is India’s first fully managed, women-only remote talent platform, 
              built to connect businesses with pre-vetted, remote-ready women professionals. 
              From virtual assistants and marketers to sales and content specialists, we offer 
              flexible, project-based and hybrid solutions that help companies scale smarter. 
              Our DEI-first approach not only supports business goals but also empowers returnees, 
              caregivers, LGBTQ+ individuals, and PwD talent to build meaningful careers from home.
            </p>
          </div>

          <div className="about-image">
            <img src={aboutImage} alt="About Streelancer" />
          </div>
        </div>
         <StatsSection/>
      
         <VisionSection/>
<Ourvalue/>

         {/* <OurVisionMission/> */}
      </div>
     <CommunityBanner/>
    </section>
  );
};

export default AboutUs;
