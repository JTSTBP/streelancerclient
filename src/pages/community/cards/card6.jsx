

import React, { useState, useEffect, useRef } from "react";
import blog1 from "../../../images/blog1.png";
import blog2 from "../../../images/blog2.png";
import blog3 from "../../../images/blog3.png";
import { useNavigate } from "react-router-dom";
import Backendurl from "../../../config"

const dummyData = [
  {
    image: blog1,
    title: "Talent Acquisition",
    
    content:
      "From quick staffing to strategic talent acquisition, we tailor solutions that grow with your business.",
    navigate: "/Community/foundermistake",
  },
  {
    image: blog2,
    title: "Attitude vs Skill",
  
    content:
      "Future-ready teams need more than just qualifications—they need the right mindset and build a team that grows with you.",
    navigate: "/Community/Skills",
  },
  {
    image: blog3,

    title: "Hiring Doesn’t Have to Be a Guessing Game",
    content:
      "Avoid common hiring pitfalls, tap into industry expertise, and scale your team the right way from day one.",
    navigate: "/Community/Talent",
  },
 
  
];



// const CommunityBlog = () => {
//   const navigate = useNavigate();
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const itemsPerPage = 3;
//   const intervalRef = useRef(null);
//     const [blogs, setBlogs] = useState([]);

//  useEffect(() => {
//     fetch(`${Backendurl}/admin/allblogs`)
//       .then((res) => res.json())
//       .then((data) => {
//         const blogsData = Array.isArray(data) ? data : data.posts || [];
//       setBlogs(blogsData);
     
//       })
//       .catch((err) => console.error(err));
//   }, []);
//   console.log(blogs,"b")

  

//   const startAutoSlide = () => {
//     stopAutoSlide(); // clear previous interval if any
//     intervalRef.current = setInterval(() => {
//       setCurrentIndex((prev) =>
//         prev + itemsPerPage >= blogs.length ? 0 : prev + itemsPerPage
//       );
//     }, 4000);
//   };

//   const stopAutoSlide = () => {
//     if (intervalRef.current) clearInterval(intervalRef.current);
//   };

//   useEffect(() => {
//     startAutoSlide();
//     return () => stopAutoSlide();
//   }, []);

//   const handleNext = () => {
//     stopAutoSlide();
//     setCurrentIndex((prev) =>
//       prev + itemsPerPage >= blogs.length ? 0 : prev + itemsPerPage
//     );
//   };

//   const handlePrev = () => {
//     stopAutoSlide();
//     setCurrentIndex((prev) =>
//       prev - itemsPerPage < 0
//         ? Math.max(blogs.length - itemsPerPage, 0)
//         : prev - itemsPerPage
//     );
//   };

//   const visibleItems = blogs.slice(currentIndex, currentIndex + itemsPerPage);

//   return (
//     <section className="communityblog">
//       <h2>Paid Microprojects</h2>
//       <p className="communityblog-subtext">
//         Insights, journeys, and ideas — written by and for the Streelancer network.
//       </p>

//       <div
//         className="communityblog-cards-wrapper"
//         onMouseEnter={stopAutoSlide}
//         onMouseLeave={startAutoSlide}
//       >
//         <button className="communityblog-arrow" onClick={handlePrev}>
//           &#10094;
//         </button>
//         <div className="communityblog-cards">
//           {visibleItems.map((item, index) => (
//             <div className="blog-card" key={index}>
//               <div className="blog-image">
//                 <img src={item.image} alt={item.title} />
//               </div>
//               <div className="blog-content">
//                 <div className="blog-meta">
//                   <span className="blog-author">BY ADMIN</span>
//                   <span className="blog-time">1 hour ago</span>
//                 </div>
//                 {item.heading && <h3 className="blog-title">{item.heading}</h3>}
//                 <p className="blog-desc">{item.description}</p>
//                 <button
//                   className="communityblog-learn-more"
//                   onClick={() => navigate(item.navigate)}
//                 >
//                   Learn More
//                 </button>
//                 <br />
//                 <span className="blog-read-time">4 mins read</span>
//               </div>
//             </div>
//           ))}
//         </div>
//         <button className="communityblog-arrow" onClick={handleNext}>
//           &#10095;
//         </button>
//       </div>
//     </section>
//   );
// };

const CommunityBlog = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const intervalRef = useRef(null);
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    fetch(`${Backendurl}/admin/allblogs`)
      .then((res) => res.json())
      .then((data) => {
        const blogsData = Array.isArray(data) ? data : data.posts || [];
        // If API returns empty array, use dummyData
        setBlogs(blogsData.length > 0 ? blogsData : dummyData);
      })
      .catch((err) => {
        console.error(err);
        // In case of API error, also use dummyData
        setBlogs(dummyData);
      });
  }, []);
  const truncateText = (text, length = 100) =>
  text.length > length ? text.substring(0, length) + "..." : text;
const getTimeAgo = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  if (diffMins < 60) return `${diffMins} mins ago`;
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
};
const BlogPopup = ({ blog, onClose }) => {
  if (!blog) return null;
  return (
    <div className="blog-popup-overlay" onClick={onClose}>
      <div className="blog-popup" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <img src={blog.image} alt={blog.title} className="popup-image" />
        <h2>{blog.title}</h2>
        <p>{blog.content}</p>
      </div>
    </div>
  );
};

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + itemsPerPage >= blogs.length ? 0 : prev + itemsPerPage
      );
    }, 4000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [blogs]);

  const handleNext = () => {
    stopAutoSlide();
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= blogs.length ? 0 : prev + itemsPerPage
    );
  };

  const handlePrev = () => {
    stopAutoSlide();
    setCurrentIndex((prev) =>
      prev - itemsPerPage < 0
        ? Math.max(blogs.length - itemsPerPage, 0)
        : prev - itemsPerPage
    );
  };

  const visibleItems = blogs.slice(currentIndex, currentIndex + itemsPerPage);
console.log(visibleItems,"visibleItems")
  return (
    <section className="communityblog">
      <h2>Paid Microprojects</h2>
      <p className="communityblog-subtext">
        Insights, journeys, and ideas — written by and for the Streelancer network.
      </p>

      <div
        className="communityblog-cards-wrapper"
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
      >
        <button className="communityblog-arrow" onClick={handlePrev}>
          &#10094;
        </button>
        <div className="communityblog-cards">
          {visibleItems.map((item, index) => (
            <div className="blog-card" key={index}>
              <div className="blog-image">
                <img src={item.image} alt={item.id} />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-author">BY ADMIN</span>
                  <span className="blog-time">{getTimeAgo(item.createdAt || item.updatedAt)}</span>
                </div>
                {item.heading && <h3 className="blog-title">{item.title}</h3>}
                     <p className="blog-desc">{truncateText(item.content)}</p>
                <button
                  className="communityblog-learn-more"
                  onClick={() => setSelectedBlog(item)}
                >
                  Learn More
                </button>
                <br />
                <span className="blog-read-time">4 mins read</span>
              </div>
            </div>
          ))}
        </div>
        <button className="communityblog-arrow" onClick={handleNext}>
          &#10095;
        </button>
      </div>
      <BlogPopup blog={selectedBlog} onClose={() => setSelectedBlog(null)} />
    </section>
  );
};


export default CommunityBlog;
