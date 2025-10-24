

import React from "react";
import "./formcard.css";

export default function AlmostDone({ formData, setFormData }) {
  const almostDone = formData.almostDone || {
    joinCommunity: false,
    preferences: {
      jobMatches: false,
      training: false,
      events: false,
      news: false,
    },
    agreeTerms: false,
  };

  const handlePreferenceChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      almostDone: {
        ...almostDone,
        preferences: {
          ...almostDone.preferences,
          [name]: checked,
        },
      },
    }));
  };

  const handleToggleCommunity = () => {
    setFormData((prev) => ({
      ...prev,
      almostDone: {
        ...almostDone,
        joinCommunity: !almostDone.joinCommunity,
      },
    }));
  };

  const handleAgreeTerms = () => {
    setFormData((prev) => ({
      ...prev,
      almostDone: {
        ...almostDone,
        agreeTerms: !almostDone.agreeTerms,
      },
    }));
  };

  return (
    <div className="almost-done-container">
      <h2><a href="#">Almost Done!</a></h2>

      {/* Join Our Community */}
      <div className="field-block toggle-block">
        <label className="field-label">Join Our Community</label>
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={almostDone.joinCommunity}
            onChange={handleToggleCommunity}
          />
          <span className="slider round"></span>
        </label>
        <span className="toggle-text">
          I'd like to join the Streelancer community for networking and resources
        </span>
      </div>

      {/* Notification Preferences */}
      <div className="field-block">
        <label className="field-label">Notification Preferences</label>
        <div className="checkbox-group">
          {["jobMatches", "training", "events", "news"].map((pref) => (
            <label key={pref}>
              <input
                type="checkbox"
                name={pref}
                checked={almostDone.preferences[pref]}
                onChange={handlePreferenceChange}
              />
              {pref === "jobMatches" && "Job matches based on my profile"}
              {pref === "training" && "Training opportunities and skill development"}
              {pref === "events" && "Community events and networking"}
              {pref === "news" && "Industry news and updates"}
            </label>
          ))}
        </div>
      </div>

      {/* Notification Info Box */}
      <div className="info-box">
        <strong>Notification Preferences</strong>
        <p>Based on your profile, you'll be automatically matched with:</p>
        <ul className="checkbox-group">
          <li>Job opportunities that match your skills and preferences</li>
          <li>Relevant training courses in our Academy if needed</li>
          <li>Community resources and networking events</li>
        </ul>
      </div>

      {/* Terms and Privacy */}
      <div className="terms-block">
        <label>
          <input
            type="checkbox"
            checked={almostDone.agreeTerms}
            onChange={handleAgreeTerms}
          />
          I agree to the <a href="#">Teams and services</a> and <a href="#">Privacy Policy</a>
        </label>
      </div>
    </div>
  );
}
