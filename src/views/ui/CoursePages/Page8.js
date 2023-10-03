// src/CoursePages/Page6.js
import React, { useState } from "react";
import "./Page.css";
import { Link } from "react-router-dom";
import image8 from "./8.jpg";



function Page8() {
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
          <h1 className="course-title">React</h1>
          <p>
            React is a JavaScript library for building user interfaces. It is declarative, efficient, and flexible. React makes it easy to create interactive UIs by using a component-based approach.
          </p>
          <div className="join-course-container">
            <Link to="/join/course8" className="join-course">
              View Course
            </Link>
          </div>
          </div>
          <div className="image-right">
          <img className="image" src={image8} alt="Course 8" />
        </div>
      </div>

       {/* Section Titles with Toggle Buttons */}
       <div className="section-buttons">
        <button onClick={() => handleSectionClick("versatility")} className={isSectionActive("versatility") ? "active" : ""}>Versatility of React</button>
        <button onClick={() => handleSectionClick("benefits")} className={isSectionActive("benefits") ? "active" : ""}>Benefits of Using React</button>
        <button onClick={() => handleSectionClick("companies")} className={isSectionActive("companies") ? "active" : ""}>Popular Companies Using React</button>
      </div>

      {/* Lists */}
      <div className={`section-list ${isSectionActive("versatility") ? "active" : ""}`}>
        <h2 className="section-title"><br></br>Versatility of React</h2>
        <ul>
          <li>Modular architecture</li>
          <li>One-way data flow</li>
          <li>Virtual DOM</li>
          <li>Compatibility with other technologies</li>
          <li>Platform support</li>
        </ul><br></br>
        </div>

      <div className={`section-list ${isSectionActive("benefits") ? "active" : ""}`}>
        <h2 className="section-title"><br></br>Benefits of Using React</h2>
        <ul>
          <li><strong>Declarative:</strong></li><p> React is a declarative language. This means that you describe what you want the UI to look like, and React takes care of rendering it. This makes React code easy to read and maintain.</p>
          <li><strong>Efficient:</strong></li><p> React is a very efficient library. It uses a virtual DOM to efficiently update the UI. This makes React applications very fast and responsive.</p>
          <li><strong>Flexible:</strong></li><p> React is a very flexible library. It can be used to build a wide variety of UIs, from simple websites to complex interactive applications.</p>
          <li><strong>Large community:</strong></li><p> React has a large and active community of developers. This means that there are a lot of resources available to React developers, such as libraries, frameworks, and tutorials.</p>
        </ul>
        <br></br>
        </div>

      <div className={`section-list ${isSectionActive("companies") ? "active" : ""}`}>
        <h2 className="section-title"><br></br>Popular Companies Using React</h2> 
        <ul>
          <li>Facebook</li>
          <li>Netflix</li>
          <li>Airbnb</li>
          <li>Uber</li>
          <li>PayPal</li>
          <li>Instagram</li>
          <li>Pinterest</li>
          <li>Reddit</li>
          <li>Discord</li>
          <li>Asana</li>
          <li>Khan Academy</li>
        </ul><br></br>
        <p>
          If you are interested in learning to develop web applications, React is a good choice. It is a declarative, efficient, and flexible library that can be used to build a wide variety of UIs.
        </p>
        </div>
     
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Page8;
