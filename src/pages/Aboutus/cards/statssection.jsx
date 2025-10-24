import React from "react";


const StatsSection = () => {
  const stats = [
    { number: "15,000+", text: "Successful Hires", bg: "light" },
    { number: "100+", text: "recruitment specialists", bg: "dark" },
    { number: "100%", text: "service commitment", bg: "light" },
    { number: "98%", text: "client retention rate", bg: "dark" },
  ];

  return (
    <section className="stats-section">
      <h2 className="stats-heading">
        Over the years, we’ve <span className="highlight">supported:</span>
      </h2>
      <div className="stats-grid h-auto md:h-[43vh]">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`stat-box ${item.bg === "dark" ? "dark-bg" : "light-bg"}`}
          >
            <h3 className="stat-number">{item.number}</h3>
            <p className="stat-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
