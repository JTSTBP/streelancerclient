import React, { useEffect ,useRef} from "react";
import "./globalflex.css";

import GlobalFlexNetwork from "./cards/globalflexbanner";
import GlobalFlexFeatures from "./cards/globalflexfeatures";
import IndustrySolutions from "./cards/industrysolutions";
import HowItWorks from "./cards/howitworks";
import ContactForm from "./cards/contactus";
import { useLocation } from "react-router-dom";
import Navbar from "../Home/navbar";
import SampleNavbar from "../Home/OtherpagesNavbar";
import FAQSection from "./cards/faqs";
import { useState } from "react";



const GlobalFlex = () => {
   const { pathname, hash } = useLocation();
  const contactRef = useRef(null);
 
   
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (hash === "#contact" && contactRef.current) {
      setTimeout(() => {
        contactRef.current.scrollIntoView({ behavior: "smooth" });
      }, 300); // wait for page render
    }
  }, [pathname, hash]);

    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  return (
    <div>
      {/* <SampleNavbar/> */}
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <GlobalFlexNetwork />
      <GlobalFlexFeatures />
      <IndustrySolutions />
      <HowItWorks />
      <FAQSection />
      <div ref={contactRef}>
        <ContactForm />
      </div>
    </div>
  );
};

export default GlobalFlex;
