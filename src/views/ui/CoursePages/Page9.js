// src/CoursePages/Page6.js
import React, { useState } from "react";
import "./Page.css";
import { Link } from "react-router-dom";
import image9 from  "./9.jpg";



function Page9() {
  // Define state variables to manage the display of lists
  const [activeSection, setActiveSection] = useState(null);

  // Function to set the active section when a section title button is clicked
  const handleSectionClick = (section) => {
    setActiveSection(section === activeSection ? null : section);
  };

  // Function to check if a section is active
  const isSectionActive = (section) => {
    return section === activeSection;
  };

  return (
    <div>
         <header className="header">
         <a href="/">
          <h1>E-Learning</h1>
        </a>
        <div className="header-buttons">
          <button>Blog</button>
          <button>FeedBack</button>
          <button>Services</button>
          <button>Contact</button>
          <a href="/login">Login</a>
          <a href="/signup">Sign Up</a>
        </div>
      </header>

      <div className="page-container">
        <div className="content-left">
          <h1 className="course-title">Flutter</h1>
          <p>
            Flutter is a UI toolkit from Google for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.
          </p>
          <div className="join-course-container">
            <Link to="/join/course9" className="join-course">
              View Course
            </Link>
          </div>
        </div>
        <div className="image-right">
          <img className="image" src={image9} alt="Course 9" />
        </div>
      </div>

      {/* Section Titles with Toggle Buttons */}
      <div className="section-buttons">
        <button onClick={() => handleSectionClick("versatility")} className={isSectionActive("versatility") ? "active" : ""}>Versatility of Flutter</button>
        <button onClick={() => handleSectionClick("benefits")} className={isSectionActive("benefits") ? "active" : ""}>Benefits of Using Flutter</button>
        <button onClick={() => handleSectionClick("companies")} className={isSectionActive("companies") ? "active" : ""}>Popular Companies Using Flutter</button>
      </div>

      {/* Lists */}
      <div className={`section-list ${isSectionActive("versatility") ? "active" : ""}`}>
        <h2 className="section-title"><br></br>Versatility of Flutter</h2>
        <ul>
          <li>Modular architecture</li>
          <li>One-way data flow</li>
          <li>Virtual DOM</li>
          <li>Compatibility with other technologies</li>
          <li>Platform support</li>
        </ul><br></br>
      </div>
      <div className={`section-list ${isSectionActive("benefits") ? "active" : ""}`}>
        <h2 className="section-title"><br></br>Benefits of Using Flutter</h2>
        <ul>
          <li><strong>Cross-platform development:</strong></li><p> Flutter allows developers to build native applications for multiple platforms from a single codebase.</p>
          <li><strong>Fast development:</strong></li><p> Flutter's hot reload feature allows developers to see changes to their app in real-time as they make changes to the code.</p>
          <li><strong>Beautiful user interfaces:</strong></li><p> Flutter provides a rich set of customizable widgets that can be used to create beautiful and user-friendly interfaces.</p>
          <li><strong>High performance:</strong></li><p> Flutter apps are compiled to native code, which means that they are fast and responsive.</p>
          <li><strong>Open source community:</strong></li><p>Flutter is an open source project with a large and active community. This means that there are many resources available to help developers learn Flutter and build Flutter apps.</p>
        </ul><br></br>

      </div>

      <div className={`section-list ${isSectionActive("companies") ? "active" : ""}`}>
        <h2 className="section-title"><br></br>Popular Companies Using Flutter</h2>
      <ul>
        <li>Google</li>
        <li>Alibaba</li>
        <li>eBay</li>
        <li>Hamilton</li>
        <li>Groupon</li>
        <li>JD.com</li>
        <li>New York Times</li>
        <li>Square</li>
        <li>Tencent</li>
        <li>Toyota</li>
        <li>Xing</li>
      </ul><br></br>
      </div>
      
      

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Page9;
