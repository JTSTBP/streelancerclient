

import React from "react";
import "./formcard.css";

export default function PortfolioWorkSamples({ formData, setFormData }) {
  const portfolioData = formData.portfolio || {};

  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      portfolio: {
        ...prev.portfolio,
        [key]: value,
      },
    }));
  };

 const handleResumeUpload = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onloadend = () => {
    setFormData((prev) => ({
      ...prev,
      portfolio: {
        ...prev.portfolio,
        resume: {
          fileName: file.name,
          fileType: file.type,
          fileData: reader.result.split(",")[1], // Base64 only
        },
      },
    }));
  };
  reader.readAsDataURL(file);
};


  return (
    <div className="portfolio-container">
      <h2>Portfolio & Work Samples</h2>

      {/* Resume Upload */}
      <div className="section">
        <p>Resume/CV</p>
        <div className="upload-box">
          <label htmlFor="resume-upload" className="upload-label">
            <div className="upload-icon">
              <img src={require("../../../images/upload.png")} alt="upload" />
            </div>
            <p>
              <strong className="side-head">Drag and drop your resume here</strong>
            </p>
            <p className="hint">(or click to browse PDF, DOCX, max 5MB)</p>
          </label>
          <input
            id="resume-upload"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleResumeUpload}
          />
          {portfolioData.resume && (
            <p className="filename">Selected: {portfolioData.resume.name}</p>
          )}
        </div>
      </div>

      {/* Portfolio Link */}
      <div className="section">
        <p>
          Portfolio Link <span className="optional">(optional)</span>
        </p>
        <div className="input-group">
          <label>
            <span className="icon">
              <img src={require("../../../images/link.png")} alt="link" />
            </span>
            <input
              type="url"
              placeholder="https://your-portfolio-site.com"
              value={portfolioData.portfolio || ""}
              onChange={(e) => handleChange("portfolio", e.target.value)}
            />
          </label>
        </div>
      </div>

      {/* LinkedIn Link */}
      <div className="section">
        <p>
          LinkedIn Profile <span className="optional">(optional)</span>
        </p>
        <div className="input-group">
          <label>
            <span className="icon">
              <i className="fab fa-linkedin"></i>
            </span>
            <input
              type="url"
              placeholder="https://linkedin.com/in/your-profile"
              value={portfolioData.linkedin || ""}
              onChange={(e) => handleChange("linkedin", e.target.value)}
            />
          </label>
        </div>
      </div>

      {/* Work Samples */}
      <div className="section">
        <p>
          Work Samples <span className="optional">(optional)</span>
        </p>
        <p className="hint">Upload examples of your work to showcase your skills</p>
        <div className="work-samples">
          <div className="sample-box">
            <div className="upload-icon">
              <span className="plus">+</span>
            </div>
            <p className="hint">Add work sample</p>
          </div>
          <div className="sample-box">
            <div className="upload-icon">
              <span className="plus">+</span>
            </div>
            <p className="hint">Add work sample</p>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="section">
        <p>
          Additional Information <span className="optional">(optional)</span>
        </p>
        <textarea
          placeholder="Share anything else that might help us match you with the right opportunities"
          value={portfolioData.additionalInfo || ""}
          onChange={(e) => handleChange("additionalInfo", e.target.value)}
        />
      </div>
    </div>
  );
}
