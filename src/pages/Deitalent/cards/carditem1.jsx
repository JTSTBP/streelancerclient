import React from 'react';

const RemoteCard = ({ icon, title, featuresList }) => {
  return (
    <div className="remote-card">
      <div className="remote-icon-circle">
        <img src={icon} alt="Icon" />
      </div>
      <h3 className="remote-title">{title}</h3>
      <ul className="remote-features">
        {featuresList?.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default RemoteCard;
