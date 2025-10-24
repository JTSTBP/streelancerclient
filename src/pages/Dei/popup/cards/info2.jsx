import React from 'react';

const WorkforceComposition = ({ data, setData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      info2: {
        ...prev.info2,
        [name]: value
      }
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const selected = data.info2.selectedGroups || [];

    const updatedGroups = checked
      ? [...selected, value]
      : selected.filter((item) => item !== value);

    setData((prev) => ({
      ...prev,
      info2: {
        ...prev.info2,
        selectedGroups: updatedGroups
      }
    }));
  };

  return (
    <div className="dei-workforce-container">
      <p className="dei-section-label">Please provide your Workforce Composition.</p>

      <label className="dei-field-label">Total employees</label>
      <div className="dei-input-row-custom">
        <input
          type="text"
          name="employeeNote"
          placeholder="Number of employees in the company"
          className="dei-text-input-custom"
          value={data.info2.employeeNote || ''}
          onChange={handleChange}
        />
        <input
          type="number"
          name="employeeCount"
          placeholder="1"
          className="dei-number-input-custom"
          min={1}
          value={data.info2.employeeCount || ''}
          onChange={handleChange}
        />
      </div>

      <div className="dei-checkbox-grid">
        <label>
          <input
            type="checkbox"
            value="Career Returnees"
            checked={data.info2.selectedGroups?.includes("Career Returnees") || false}
            onChange={handleCheckboxChange}
          />
          Career Returnees
        </label>

        <label>
          <input
            type="checkbox"
            value="LGBTQIA+ Talent"
            checked={data.info2.selectedGroups?.includes("LGBTQIA+ Talent") || false}
            onChange={handleCheckboxChange}
          />
          LGBTQIA+ Talent
        </label>

        <label>
          <input
            type="checkbox"
            value="Silver Generation"
            checked={data.info2.selectedGroups?.includes("Silver Generation") || false}
            onChange={handleCheckboxChange}
          />
          Silver Generation
        </label>

        <label>
          <input
            type="checkbox"
            value="Fresh Streelancer & Students"
            checked={data.info2.selectedGroups?.includes("Fresh Streelancer & Students") || false}
            onChange={handleCheckboxChange}
          />
          Fresh Streelancer & Students
        </label>

        <label>
          <input
            type="checkbox"
            value="Persons with Disabilities (PwD)"
            checked={data.info2.selectedGroups?.includes("Persons with Disabilities (PwD)") || false}
            onChange={handleCheckboxChange}
          />
          Persons with Disabilities (PwD)
        </label>
      </div>
    </div>
  );
};

export default WorkforceComposition;
