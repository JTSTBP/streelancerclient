import React, { useEffect, useState } from "react";
import "./home.css";
import womanLaptop from "../../images/girl.png";

import HeroServices from "./homecontent/HeroServices";
import CommunityBanner from "./homecontent/CommunityBanner";
import ExperienceBoxes from "./homecontent/ExperienceBoxes";
import StreelancerSteps from "./homecontent/stepscontent";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import FindGreatWork from "./homecontent/findgreatwork";
import FAQSection from "./homecontent/faqs";
 // Adjust the path as needed

const HomePage = () => {
   const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="hero-container">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <div>
            <h1>Smarter Hiring Starts With Women
</h1>
            <p>
            On-Demand, Vetted & Managed Talent—Ready in 72 Hours!

            </p>
            <div className="hero-buttons">
              <button className="btn-primary standard-btn" onClick={()=>{ navigate("/DEITalenthire")}}>GET TALENT NOW </button>
              <button className="btn-primary btn-outline standard-btn" onClick={()=>{ navigate("/Signup")}}>JOIN OUR NETWORK</button>
            </div>
            <ul className="features">
              <li>
                <span>
                  <img src={require("../../images/done.png")} />
                </span>
               Zero HR Headaches—We Handle Everything!
              </li>
              <li>
                <span>
                  <img src={require("../../images/done.png")} />
                </span>
               Flexible Hiring: Remote, Hybrid, or Part-Time

              </li>
              <li>
                <img src={require("../../images/done.png")} />
              DEI-Certified Talent, Pre-Vetted for Excellence

              </li>
            </ul>
          </div>
        </div>

        <div className="hero-image">
          <img src={womanLaptop} alt="Woman with laptop" />
        </div>
      </section>
     <FindGreatWork/>
      <HeroServices />
 
      <ExperienceBoxes />
      <StreelancerSteps />
      <FAQSection/>
      <CommunityBanner />
    </div>
  );
};

export default HomePage;
