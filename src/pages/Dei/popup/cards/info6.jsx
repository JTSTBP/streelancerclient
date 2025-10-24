import React from 'react';

const DEIReviewConsent = ({ data, setData }) => {
  const handleCheckboxChange = (e) => {
    setData((prev) => ({
      ...prev,
      info6: {
        ...prev.info6,
        consentGiven: e.target.checked,
      },
    }));
  };

  return (
    <div className="dei-review-sec-container">
      <p className="dei-review-sec-review">Please Review all responses</p>

      <div className="dei-review-sec-consent-group">
        <label className="dei-review-sec-label">Accept data usage terms:</label>
        <div className="dei-review-sec-checkbox-wrapper">
          <input
            type="checkbox"
            id="data-consent"
            checked={data.info6?.consentGiven || false}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="data-consent" className="dei-review-sec-checkbox-label">
            “I consent to use of anonymized data for benchmarking and scoring“
          </label>
        </div>
      </div>
    </div>
  );
};

export default DEIReviewConsent;
