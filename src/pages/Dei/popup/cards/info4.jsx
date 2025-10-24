import React from 'react';

const DEIMeasurement = ({ data, setData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      info4: {
        ...prev.info4,
        [name]: Number(value)
      }
    }));
  };

  return (
    <div className="deipopup-container">
      <p className="deipopup-heading">
        Please provide information about the DEI Measurement & Leadership
      </p>

      {/* DEI Metrics */}
      <div className="deipopup-question">
        <p className="deipopup-question-label">Do you track any DEI metrics?</p>
        <input
          type="range"
          name="metrics"
          min="1"
          max="5"
          value={data.info4.metrics || 1}
          onChange={handleChange}
          className="deipopup-slider"
        />
        <div className="deipopup-value-display">{data.info4.metrics || 1}</div>
        <div className="deipopup-scale">
          <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
        </div>
      </div>

      {/* DEI Leadership */}
      <div className="deipopup-question">
        <p className="deipopup-question-label">Leaders promote DEI actively</p>
        <input
          type="range"
          name="leadership"
          min="1"
          max="5"
          value={data.info4.leadership || 1}
          onChange={handleChange}
          className="deipopup-slider"
        />
        <div className="deipopup-value-display">{data.info4.leadership || 1}</div>
        <div className="deipopup-scale">
          <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
        </div>
      </div>
    </div>
  );
};

export default DEIMeasurement;
