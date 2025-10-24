import React from 'react';

const InclusivePolicies = ({ data, setData }) => {
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const selected = data.info3.selectedPolicies || [];

    const updatedPolicies = checked
      ? [...selected, value]
      : selected.filter((item) => item !== value);

    setData((prev) => ({
      ...prev,
      info3: {
        ...prev.info3,
        selectedPolicies: updatedPolicies
      }
    }));
  };

  return (
    <div className="dei-inclusive-policies">
      <p className="dei-section-heading">Please provide your Inclusive Policies & Benefits</p>
      <p className="dei-sub-heading">Select what currently applies</p>

      <div className="dei-checkbox-list">
        <label>
          <input
            type="checkbox"
            value="Bias-free hiring practices"
            checked={data.info3.selectedPolicies?.includes("Bias-free hiring practices") || false}
            onChange={handleCheckboxChange}
          />
          Bias-free hiring practices
        </label>

        <label>
          <input
            type="checkbox"
            value="Parental & caregiver leave (gender-neutral)"
            checked={data.info3.selectedPolicies?.includes("Parental & caregiver leave (gender-neutral)") || false}
            onChange={handleCheckboxChange}
          />
          Parental & caregiver leave (gender-neutral)
        </label>

        <label>
          <input
            type="checkbox"
            value="Remote/flexible work options"
            checked={data.info3.selectedPolicies?.includes("Remote/flexible work options") || false}
            onChange={handleCheckboxChange}
          />
          Remote/flexible work options
        </label>

        <label>
          <input
            type="checkbox"
            value="Accessibility support (physical & digital)"
            checked={data.info3.selectedPolicies?.includes("Accessibility support (physical & digital)") || false}
            onChange={handleCheckboxChange}
          />
          Accessibility support (physical & digital)
        </label>

        <label>
          <input
            type="checkbox"
            value="Returnship or re-onboarding programs"
            checked={data.info3.selectedPolicies?.includes("Returnship or re-onboarding programs") || false}
            onChange={handleCheckboxChange}
          />
          Returnship or re-onboarding programs
        </label>
      </div>
    </div>
  );
};

export default InclusivePolicies;
