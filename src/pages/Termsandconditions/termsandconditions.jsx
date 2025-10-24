

import React, { useEffect, useState,useRef } from "react";
import "./termsandconditions.css";
import { useLocation } from "react-router-dom";
import SampleNavbar from "../Home/OtherpagesNavbar";
import TcBanner from "./cards/banner";
import Terms from "./cards/terms";



const Termsandconditions = () => {
  const { pathname } = useLocation();


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);


  return (
    <div>
         <SampleNavbar/>
         <TcBanner/>
       
      
    </div>
  );
};

export default Termsandconditions;
