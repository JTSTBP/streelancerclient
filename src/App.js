import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/inter";

import HomePage from "./pages/Home/HomePage";

import LoginPage from "./pages/Auth/LoginPage";

import Signup from "./pages/Auth/Signup";
import RegistrationPage from "./pages/Registration/RegistrationPage";
import GlobalFlex from "./pages/Globalflex/globalflex";
import Deimain from "./pages/Dei/Deimain";
import Deitalent from "./pages/Deitalent/Deitalent";
import Community from "./pages/community/community";
import FoundersMistakes from "./pages/Services/communityfounder";
import ComingSoon from "./pages/Academy/academypage";
import Skills from "./pages/Services/skills";
import Talent from "./pages/Services/talent";
import LinkedInSuccess from "./pages/Auth/linkdinsuccess";
import AboutUs from "./pages/Aboutus/Aboutus";
import Termsandconditions from "./pages/Termsandconditions/termsandconditions";








export default function App() {

 
  return (
    <>
  
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/login" element={<LoginPage/>} />
          <Route path="/Registration" element={<RegistrationPage/>} />
          <Route path="/Remotetalent" element={<GlobalFlex/>} />
           <Route path="/DEITalent" element={<Deimain/>} />
             <Route path="/DEITalenthire" element={<Deitalent/>} />
             <Route path="/Community" element={<Community/>} />
                     <Route path="/Academy" element={<ComingSoon/>} />
              <Route path="/Community/foundermistake" element={<FoundersMistakes />} />
               <Route path="/Community/Skills" element={<Skills />} />
                <Route path="/Community/Talent" element={<Talent />} />
                   <Route path="/AboutUs" element={<AboutUs />} />
                   <Route path="/Termsandconditions" element={<Termsandconditions/>}/>

 <Route path="/linkedin-success" element={<LinkedInSuccess />} />
             
      </Routes>
    </Router>
       <ToastContainer position="top-right" autoClose={3000} />
 </>
  );
}
