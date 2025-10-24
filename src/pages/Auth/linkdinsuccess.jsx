// src/pages/LinkedInSuccess.js
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LinkedInSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const token = query.get("token");
    const isNewUser = query.get("isNewUser") === "true";

    if (token) {
      localStorage.setItem("token", token);
      navigate(isNewUser ? "/Registration" : "/");
    } else {
      navigate("/login");
    }
  }, [location, navigate]);

  return <p>Redirecting...</p>;
};

export default LinkedInSuccess;
