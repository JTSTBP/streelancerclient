

import React from 'react';
import { useNavigate } from 'react-router-dom';

function ServiceCard({ title, subtitle, points, mainImage, altText, className  ,customStyle,navigateTo}) {
  const navigate =useNavigate()

  const handleNavigate=()=>{

   navigate(navigateTo)
  }
  return (
//     <div className={`service-card ${className || ''}`}>
//       <h3>{title} </h3>
//       <h4>  {subtitle}</h4>
      
//       <ul>
//         {points.map((point, index) => (
//           <li key={index}>{point}</li>
//         ))}
//       </ul>
     
//     <div
//   onClick={handleNavigate}
//   role="button"
//   tabIndex={0}
//   style={{ cursor: "pointer" }}
//   onKeyDown={(e) => { if (e.key === 'Enter') handleNavigate(); }}
// >
//          <img src={mainImage} className="card-img img-fluid"  alt={altText}  />
      
//       </div>
//       </div>
      <div  className={`offer-section ${className || ''}`}>
         <img src={mainImage} alt="Card Image" class="card-image" onClick={handleNavigate}/>
  <h1 class="top-center">{title}</h1>
  <p class="top-left">{subtitle}</p>
  
   <ul>       {points.map((point, index) => (
         <li key={index}>{point}</li>
       ))}
     </ul>
      </div>
   
  );
}

export default ServiceCard;
