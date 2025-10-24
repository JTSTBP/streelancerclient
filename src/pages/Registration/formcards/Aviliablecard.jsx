
import React from "react";

export default function AvailabilityResources({ formData, setFormData }) {
  const deviceOptions = [
    "Laptop/Desktop Computer",
    "Tablet",
    "Smartphone",
    "Headset with Microphone",
  ];

  const trainingNeeds = [
    "Technical skills",
    "Tools & platforms",
    "Soft skills",
    "Industry knowledge",
  ];

  const availability = formData.availability || {};

  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      availability: {
        ...prev.availability,
        [key]: value,
      },
    }));
  };

  const handleCheckboxList = (key, value) => {
    const current = formData.availability?.[key] || [];
    const updated = current.includes(value)
      ? current.filter((item) => item !== value)
      : [...current, value];

    setFormData((prev) => ({
      ...prev,
      availability: {
        ...prev.availability,
        [key]: updated,
      },
    }));
  };

  return (
    <div className="availability-container">
      <h2>Availability & Resources</h2>

      {/* Work Availability */}
      <div className="section">
        <p>Work Availability</p>
        <div className="options-grid">
          {["full", "part", "contract", "flexible"].map((type) => (
            <label key={type} className={`option ${availability.workAvailability === type ? "selected" : ""}`}>
              <input
                type="radio"
                name="work"
                value={type}
                checked={availability.workAvailability === type}
                onChange={() => handleChange("workAvailability", type)}
              />
              {type === "full" && "Full-time (40+ hrs/week)"}
              {type === "part" && "Part-time (20-30 hrs/week)"}
              {type === "contract" && "Contract/Project-based"}
              {type === "flexible" && "Flexible hours"}
            </label>
          ))}
        </div>
      </div>

      {/* Start Time */}
      <div className="section">
        <h3>When can you start?</h3>
        <div className="start-options">
          {["Immediately", "Within 2 weeks", "Within 1 month", "Custom date"].map((time) => (
            <button
              key={time}
              className={`start-btn ${availability.startTime === time ? "active" : ""}`}
              onClick={() => handleChange("startTime", time)}
              type="button"
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* Device Access */}
      <div className="section">
        <h3>Device Access</h3>
        <div className="checkbox-grid">
          {deviceOptions.map((device) => (
            <label key={device} className="checkbox-option">
              <input
                type="checkbox"
                checked={availability.devices?.includes(device) || false}
                onChange={() => handleCheckboxList("devices", device)}
              />
              {device}
            </label>
          ))}
        </div>
      </div>

      {/* Internet */}
      <div className="section">
        <h3>Internet Connectivity</h3>
        <div className="options-grid">
          {["high", "moderate", "limited"].map((type) => (
            <label key={type} className={`option ${availability.internet === type ? "selected" : ""}`}>
              <input
                type="radio"
                name="internet"
                value={type}
                checked={availability.internet === type}
                onChange={() => handleChange("internet", type)}
              />
              {type === "high" && "High-speed reliable connection"}
              {type === "moderate" && "Moderate connection"}
              {type === "limited" && "Limited/Unreliable connection"}
            </label>
          ))}
        </div>
      </div>

      {/* Training Needs */}
      <div className="section">
        <h3>Training Needs</h3>
        <div className="checkbox-grid">
          {trainingNeeds.map((need) => (
            <label key={need} className="checkbox-option">
              <input
                type="checkbox"
                checked={availability.trainingNeeds?.includes(need) || false}
                onChange={() => handleCheckboxList("trainingNeeds", need)}
              />
              {need}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
