


import { useContext, useEffect, useState } from "react";
import "./RegistrationPage.css";
 // Add this line to import Popup styles
import Personalcard from "./formcards/personalcard";
import ProfessionalBackgroundCard from "./formcards/professionalcard";
import WorkTrackPreferences from "./formcards/trackcard";
import AvailabilityResources from "./formcards/Aviliablecard";
import PortfolioWorkSamples from "./formcards/portfolio";
import AlmostDone from "./formcards/Almost";
import { useNavigate } from "react-router-dom";
import Backendurl from "../../config"; 
import { personalSchema } from "../../validations/validationSchema";
import { toast } from "react-toastify";


const steps = [
  "Personal",
  "Background",
  "Work Track",
  "Availability",
  "Portfolio",
  "Complete",
];

function RegistrationPage() {
  const [validationError, setValidationError] = useState("");
  const [backendError, setBackendError] = useState("");
  const [updatebtn,setUpdateBtn]=useState("")

  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
  personal: {},
 professional: {},
  availability: {},
  portfolio: {},
almostDone: {      // <-- Add default structure
    joinCommunity: false,
    preferences: {
      jobMatches: false,
      training: false,
      events: false,
      news: false,
    },
    agreeTerms: false,
  },
  preferences: {
    workTracks: [],
    experience: ""
  }

});
console.log(formData,"formData")

// get user details
useEffect(() => {
  const fetchUserDetails = async () => {

    const storedData = localStorage.getItem("Usersignup");
if (storedData) {
  const parsedData = JSON.parse(storedData);

  setFormData((prev) => ({
    ...prev,
    personal: {
      ...prev.personal,
      firstName: parsedData.fullName || "",
      email: parsedData.email || "",
      gender: parsedData.gender || "",
      
    },
  }));
}



    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const response = await fetch(`${Backendurl}/api/UserDetails`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Fetched user details:", data);
  setUpdateBtn(true)
        // Update form data with backend values
        setFormData((prev) => ({
          ...prev,
          personal: data.personal || {},
          professional: data.professional || {},
          availability: data.availability || {},
          portfolio: data.portfolio || {},
          almostDone: data.almostDone || prev.almostDone,
          preferences:data.preferences || prev.preferences
        }));
      } else {
        console.error("Failed to fetch user details");
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  fetchUserDetails();
}, []);

const validateStep = () => {
  if (currentStep === 0) {
    const { error } = personalSchema.validate(formData.personal, { abortEarly: false });

    if (error) {
const allErrors = error.details[0].message;
      setValidationError(allErrors);

      // Optional: show with toast
      // error.details.forEach(err => toast.error(err.message));
      return false;
    }
  }

  // Future: Add professionalSchema, etc., for other steps

  setValidationError("");
  return true;
};





 const handleNext = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!validateStep()) return;

  if (currentStep < steps.length - 1) {
    setCurrentStep(currentStep + 1);
  }
};


const handleBack = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

const handleSubmit = async () => {
    setBackendError("");
  window.scrollTo({ top: 0, behavior: "smooth" });

  try {
    const response = await fetch(`${Backendurl}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();

    console.log(data,"data")

  

    if (response.ok) {
  setShowPopup(true);
  setBackendError(""); // clear previous errors
} else {
  setBackendError(data?.message || "Failed to submit registration.");
}
  } catch (error) {
    console.error("Error submitting form:", error);
  setBackendError("An error occurred while submitting. Please try again.");
  }
};

const handleUpdate = async () => {
  setBackendError("");
  window.scrollTo({ top: 0, behavior: "smooth" });

  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${Backendurl}/api/updateUserDetails`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();

    if (response.ok) {
    
        toast.success(data.message);
        navigate("/")
    } else {
      setBackendError(data?.message || "Failed to update details.");
    }
  } catch (error) {
    console.error("Error updating details:", error);
    setBackendError("An error occurred while updating. Please try again.");
  }
};


const handleClose=()=>{
setShowPopup(false)
navigate("/")
  }

  return (
    <div className="register-bg-container">
      <div className="register-container">
        <button className="close-registration-btn" onClick={() => navigate("/")}>
  ✕
</button>

        <h1 className="register-title">Join Streelancer</h1>
        <p className="register-subtitle">
          Complete this 6-step registration to find your perfect work opportunity
        </p>

        {/* Step Indicator */}
        <div className="register-steps-container">
          <div className="register-step-line-full"></div>
          <div
            className="register-step-line-progress"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          ></div>

          <div className="register-steps">
            {steps.map((step, index) => (
              <div className="register-step" key={index}>
                <div
                  className={`register-step-circle ${
                    index < currentStep
                      ? "completed"
                      : index === currentStep
                      ? "active"
                      : ""
                  }`}
                >
                  {index < currentStep ? "✔" : index + 1}
                </div>
                <div className="register-step-label">{step}</div>
              </div>
            ))}
          </div>
        </div>
        {validationError && (
  <div className="validation-error">
    {validationError}
  </div>

  
)}

{backendError && (
  <div className="backend-error-message">
    {backendError}
  </div>
)}

        <div className="register-form-content">{renderStepContent(currentStep,formData, setFormData)}</div>

        <div className="register-button-group">
          {currentStep > 0 && (
            <button className="register-back-btn" onClick={handleBack}>
              Back
            </button>
          )}
          {currentStep === steps.length - 1 ? (
  updatebtn ? (
    <button className="register-submit-btn" onClick={handleUpdate}>
      Update Details
    </button>
  ) : (
    <button className="register-submit-btn" onClick={handleSubmit}>
      Complete Registration
    </button>
  )
) : (
  <button className="register-continue-btn" onClick={handleNext}>
    Continue
  </button>
)}


         
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <p>
              Registration completed successfully! We will review your profile and
              be in touch soon.
            </p>
            <button className="close-btn" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function renderStepContent(step,formData, setFormData) {
  switch (step) {
    case 0:
      return <Personalcard formData={formData} setFormData={setFormData}/>;
    case 1:
      return <ProfessionalBackgroundCard formData={formData} setFormData={setFormData} />;
    case 2:
      return <WorkTrackPreferences formData={formData} setFormData={setFormData} />;
    case 3:
      return <AvailabilityResources formData={formData} setFormData={setFormData} />;
    case 4:
      return <PortfolioWorkSamples formData={formData} setFormData={setFormData} />;
    case 5:
      return <AlmostDone formData={formData} setFormData={setFormData} />;
    default:
      return null;
  }
}

export default RegistrationPage;
