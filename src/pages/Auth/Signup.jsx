

import React, { useEffect, useState } from "react";
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import slide1 from "../../images/signup1.png";
import slide2 from "../../images/signup2.png";
import slide3 from "../../images/signup3.png";
import "./auth.css";
import Backendurl, {LINKEDIN_REDIRECT_URI} from "../../config"; 
import { signupSchema } from "../../validations/validationSchema";
import { useGoogleLogin } from '@react-oauth/google';


const images = [slide1, slide2, slide3];

const Signup = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    jobStatus: "",
    email: "",
    password: "",
  });
  const [current, setCurrent] = useState(0);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const navigate = useNavigate();

console.log(Backendurl,"Backendurl")
  // Carousel effect
  useEffect(() => {
    isLoggedIn&&navigate("/Registration")
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form validation
  const isValid = () => {
    return (
      formData.fullName &&
      formData.gender &&
      formData.jobStatus &&
      formData.email &&
      formData.password
    );
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.preventDefault();
setMessage("");           // Clear previous message
setMessageType("");


  const { error } = signupSchema.validate(formData);

  if (error) {
    setMessage(error.details[0].message);
    setMessageType("Warning");
    return;
  }

    try {
      const response = await fetch(`${Backendurl}/api/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

     const data = await response.json();

    if (response.ok) {
       localStorage.setItem("token", data.token); 
       localStorage.setItem("Usersignup",JSON.stringify(data.newUser))
       
      setMessageType("Success");
      setMessage(data.message || "Signup successful! Redirecting...");
      setTimeout(() => navigate("/Registration"), 2500);
    } else {
      setMessageType("error");
      setMessage(data.message || "Signup failed.");
    }
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
      setMessageType("error")
    }
  };
  console.log(messageType,"messagetype");
  

// google login
const googleLogin = useGoogleLogin({
  onSuccess: async (tokenResponse) => {
    try {
      const response = await fetch(`${Backendurl}/api/google-login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ access_token: tokenResponse.access_token }),
      });

      const data = await response.json();

      if (response.ok) {
         setMessageType("Success");
        setMessage(data.message || "Google login Success.");
        localStorage.setItem("token", data.token);
        navigate(data.isNewUser ? "/Registration" : "/");
      } else {
        setMessageType("error");
        setMessage(data.message || "Google login failed.");
      }
    } catch (err) {
      setMessageType("error");
      setMessage("Google login error.");
    }
  },
  onError: () => {
    setMessageType("error");
    setMessage("Google login failed.");
  }
});

// linkdin

const linkdinlogin=()=>{
  const params=new URLSearchParams({
    response_type:"code",
    client_id:process.env.REACT_APP_LINKEDIN_CLIENT_ID,
    redirect_uri: LINKEDIN_REDIRECT_URI,
    scope: "openid email profile"

  })
  window.location.href=`https://www.linkedin.com/oauth/v2/authorization?${params}`
}

  return (
    <div className="signup-container">
      <div className="signup-wrapper">
        <h1>“Join Streelancer to start your journey”</h1>

        <div className="signup-card">
          <form className="signup-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full name"
              value={formData.fullName}
              onChange={handleChange}
            />
            <div className="input-row">
             <select
    name="gender"
    value={formData.gender}
    onChange={handleChange}
  >
    <option value="">Select Gender</option>
    <option value="Female">Female</option>
    <option value="Male">Male</option>
    <option value="Non-Binary">Non-Binary</option>
    <option value="Prefer not to say">Prefer not to say</option>
  </select>
              <input
                type="text"
                name="jobStatus"
                placeholder="Current Job Status"
                value={formData.jobStatus}
                onChange={handleChange}
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <button type="submit" className="signup-button">Sign up</button>
          </form>

          {message && <p style={{ color: messageType === "Success" ? "limegreen" : "#ff4d4f", marginTop: "10px" }}>{message}</p>}

          <div className="divider">or</div>

          <div className="auth-social-icons">
           <FaGoogle onClick={googleLogin} style={{ cursor: "pointer", fontSize: "24px" }} />
           <FaLinkedin onClick={linkdinlogin} style={{ cursor: "pointer", fontSize: "24px" }}/>
{/*          
            <FaFacebook />
            <FaLinkedin /> */}
          </div>

          <p className="signin-text">
            Already have an account?{" "}
            <a onClick={() => navigate("/login")}>Sign in</a>
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="image-carousel">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`carousel-image ${index === current ? "active" : ""}`}
          />
        ))}

        <div className="carousel-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Signup;
