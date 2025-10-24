

import React, { useState } from 'react';
import InfoFirst from './cards/info1';
import WorkforceComposition from './cards/info2';
import InclusivePolicies from './cards/info3';
import DEIMeasurement from './cards/info4';
import DEIMetricsForm from './cards/info5';
import DEIReviewConsent from './cards/info6';
import Backendurl from "../../../config"; 
import { toast } from "react-toastify";
import { info1Schema } from "../../../validations/validationSchema"
import CongratulationsPopup from './congratulationspopup'; // Make sure path is correct



const Mainpopup = ({onClose}) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [showCongrats, setShowCongrats] = useState(false);

  const [infoData, setInfodata] = useState({
  info1: {},
  info2: {},
  info3: {},
  info4: {},
  info5: {},
  info6: {}
});

const steps = [
  {
    title: "Workforce Composition",
    component: <InfoFirst data={infoData} setData={setInfodata} />
  },
  {
    title: "Info2",
    component: <WorkforceComposition data={infoData} setData={setInfodata} />
  },
  {
    title: "Info3",
    component: <InclusivePolicies data={infoData} setData={setInfodata}  />
  },
  {
    title: "Info4",
    component: <DEIMeasurement data={infoData} setData={setInfodata}  />
  },
  {
    title: "Info5",
    component: <DEIMetricsForm data={infoData} setData={setInfodata}  />
  },
  {
    title: "Info6",
    component: <DEIReviewConsent data={infoData} setData={setInfodata}  />
  }
];
 


const handleSubmit = async () => {
  try {
    const response = await fetch(`${Backendurl}/api/dei-survey`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(infoData)
    });

    if (response.ok) {
      setShowCongrats(true); // Show popup instead of toast
     
      setStepIndex(0);
    } else {
      toast.error("Submission failed. Try again.");
    }
  } catch (error) {
    alert("An error occurred during submission.");
  }
};

const validateStep = () => {
  if (stepIndex === 0) {
    const { error } = info1Schema.validate(infoData.info1, { abortEarly: false });
    if (error) {
      error.details.forEach((err) => toast.error(err.message)); // Custom error display
      return false;
    }
  }

  return true;
};

  

  const nextStep = () => {
  if (stepIndex < steps.length - 1) {
    if (validateStep()) {
      setStepIndex(stepIndex + 1);
    }
  }
};

  const prevStep = () => {
    if (stepIndex > 0) setStepIndex(stepIndex - 1);
  };

  return (
    <div className="dei-overlay">
      <div className="dei-popup">
         <button className="dei-close-button" onClick={onClose}>
    &times;
  </button>
        <h2>DEI Assessment Survey</h2>
        <div className="dei-progress-bar">
          {steps.map((_, index) => (
            <React.Fragment key={index}>
              <div className={`dei-circle ${index <= stepIndex ? 'active' : ''}`}>
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div className={`dei-line ${index < stepIndex ? 'filled' : ''}`} />
              )}
            </React.Fragment>
          ))}
        </div>
 
        <div className="dei-step-content">
          {steps[stepIndex].component}
        </div>

        <div className="deipop-buttons">
          <button onClick={prevStep} disabled={stepIndex === 0}>Back</button>
           {stepIndex === steps.length - 1 ? (
    <button onClick={handleSubmit}>Submit</button>
  ) : (
    <button onClick={nextStep} >Continue</button>
  )}
        </div>
      </div>
      {showCongrats && (
  <CongratulationsPopup onClose={() => setShowCongrats(false)} onCloseMain={()=>onClose()} />
)}

    </div>
  );
};

export default Mainpopup;
