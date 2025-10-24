

import React, { useEffect, useRef } from "react";
import "./Deitalent.css";
import { useLocation } from "react-router-dom";
import Deitalentbanner from "./cards/card1";
import Deifeatures from "./cards/card2";
import WhyChooseUs from "./cards/card3";
import HowItWorks from "./cards/card5";
import HiringCard from "./cards/card6";
import IndustriesSection from "./cards/card4";
import ContactForm from "./cards/card7";
import SampleNavbar from "../Home/OtherpagesNavbar";
import FAQSection from "./cards/faqs";
import Navbar from "../Home/navbar";
import { useState } from "react";


const Deitalent = () => {
 const { pathname } = useLocation();
  const hiringRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

const scrollToHiringCard = () => {
  if (hiringRef.current) {
    hiringRef.current.scrollIntoView({ behavior: "smooth" });
  }
};

const scrollToContactForm = () => {
  if (contactRef.current) {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  }
};

  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  return (
    <div>
      {/* <SampleNavbar/> */}
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Deitalentbanner />
      <Deifeatures
        onTakeSurveyClick={scrollToHiringCard}
        onBookConsultClick={scrollToContactForm}
      />
      <WhyChooseUs />
      <IndustriesSection />
      <HowItWorks />
      <div ref={hiringRef}>
        <HiringCard />
      </div>
      <FAQSection />
      <div ref={contactRef}>
        <ContactForm />
      </div>
    </div>
  );
};

export default Deitalent;
