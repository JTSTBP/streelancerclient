import React from 'react';

const DEIMetricsForm = ({ data, setData }) => {
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const prev = data.info5?.metrics || [];

    const updatedMetrics = checked
      ? [...prev, value]
      : prev.filter((item) => item !== value);

    setData((prev) => ({
      ...prev,
      info5: {
        ...prev.info5,
        metrics: updatedMetrics
      }
    }));
  };

  const handleRadioChange = (name, value) => {
    setData((prev) => ({
      ...prev,
      info5: {
        ...prev.info5,
        [name]: value
      }
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      info5: {
        ...prev.info5,
        [name]: value
      }
    }));
  };

  const metricsList = [
    'Gender pay gap',
    'Promotions by group',
    'None currently',
    'Attrition by group',
    'Supplier diversity',
    'Other'
  ];

  return (
    <div className="dei-metrics-sec-container">
      <p className="dei-metrics-sec-title">
        Please provide information about <b>DEI Measurement & Leadership</b>
      </p>

      {/* DEI Metrics Checkboxes */}
      <div className="dei-metrics-sec-group">
        <label className="dei-metrics-sec-label">Do you track any DEI metrics?</label>
        <div className="dei-metrics-sec-checkbox-grid">
          {metricsList.map((item, i) => (
            <label key={i} className="dei-metrics-sec-checkbox-item">
              <input
                type="checkbox"
                value={item}
                checked={data.info5?.metrics?.includes(item) || false}
                onChange={handleCheckboxChange}
              />{' '}
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* DEI Goals */}
      <div className="dei-metrics-sec-group">
        <label className="dei-metrics-sec-label">Do you have specific DEI goals or targets?</label>
        <div className="dei-metrics-sec-radio-group">
          <label>
            <input
              type="radio"
              name="deiGoals"
              checked={data.info5?.hasGoals === false}
              onChange={() => handleRadioChange('hasGoals', false)}
            />{' '}
            No
          </label>
          <label>
            <input
              type="radio"
              name="deiGoals"
              checked={data.info5?.hasGoals === true}
              onChange={() => handleRadioChange('hasGoals', true)}
            />{' '}
            Yes
          </label>
        </div>
        {data.info5?.hasGoals && (
          <input
            type="text"
            name="goalsDetails"
            value={data.info5?.goalsDetails || ''}
            onChange={handleInputChange}
            className="dei-metrics-sec-text-input"
            placeholder="If yes specify :"
          />
        )}
      </div>

      {/* DEI Council */}
      <div className="dei-metrics-sec-group">
        <label className="dei-metrics-sec-label">Do you have a DEI Officer or Council?</label>
        <div className="dei-metrics-sec-radio-group">
          <label>
            <input
              type="radio"
              name="deiCouncil"
              checked={data.info5?.hasCouncil === false}
              onChange={() => handleRadioChange('hasCouncil', false)}
            />{' '}
            No
          </label>
          <label>
            <input
              type="radio"
              name="deiCouncil"
              checked={data.info5?.hasCouncil === true}
              onChange={() => handleRadioChange('hasCouncil', true)}
            />{' '}
            Yes
          </label>
        </div>
        {data.info5?.hasCouncil && (
          <input
            type="text"
            name="councilDetails"
            value={data.info5?.councilDetails || ''}
            onChange={handleInputChange}
            className="dei-metrics-sec-text-input"
            placeholder="If yes specify :"
          />
        )}
      </div>

      {/* Budget per employee */}
      <div className="dei-metrics-sec-group">
        <label className="dei-metrics-sec-label">
          Approximate annual DEI budget per employee
        </label>
        <input
          type="text"
          name="budget"
          value={data.info5?.budget || ''}
          onChange={handleInputChange}
          className="dei-metrics-sec-text-input"
        />
      </div>
    </div>
  );
};

export default DEIMetricsForm;
