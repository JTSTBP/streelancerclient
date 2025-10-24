import React from "react";
import arrow from "../../../images/rearrow2.png"
import val1 from "../../../images/val1.png"
import val2 from "../../../images/val2.png"
import val3 from "../../../images/val3.png"
import imgval1 from "../../../images/imgval1.png"
import imgval2 from "../../../images/imgval2.png"
import imgval3 from "../../../images/imgval3.png"
import { useNavigate } from "react-router-dom";


const Ourvalue = () => {
 
  const stats = [
    { number: "Purpose Over Optics", text: "We don’t just tick boxes — we build meaningful, long-term opportunities for women.", imgbg:val1,img:imgval1 },
    { number: "Remote, Yet Connected", text: "We lead with empathy, foster collaboration, and build strong remote cultures.", imgbg:val2,img:imgval2  },
    { number: "Results with Responsibility", text: "We take ownership, meet deadlines, and deliver with integrity and consistency.", imgbg:val3,img:imgval3},

  ];

  return (
    <section className="ourvalue-section">
        <div className="ourvalue-text">
        <img className="arrow" src={arrow} />
      <h2 className="ourvalue-heading">
       Our Value
      </h2>
     </div>
      <div className="ourvalue-items">
        {stats.map((item, index) => (
          <div
            key={index}
            className="ourvalue-item"
          >
            <div className="valimg-container">
      <img src={item.imgbg} alt="Main" className="big-image" />
      <img src={item.img} alt="Small" className="small-image" />
    </div>
            <h3 className="ourvalue-number">{item.number}</h3>
            <p className="ourvalue-para">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ourvalue;
