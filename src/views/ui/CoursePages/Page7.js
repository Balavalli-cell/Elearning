// src/CoursePages/Page6.js
import React, { useState } from "react";
import "./Page.css";
import { Link } from "react-router-dom";
import image7 from  "./7.jpg";


function Page7() {
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
          <h1 className="course-title">Java</h1>
          <p>
        Java is a widely used general-purpose programming language that is known for its portability, security, and reliability. It is a class-based, object-oriented language, which means that it is based on the concept of objects, which are self-contained entities that contain data and code. Java is also a compiled language, which means that Java code is converted into machine code before it can be executed.
          </p>
          <div className="join-course-container">
            <Link to="/join/course7" className="join-course">
              View Course
            </Link>
          </div>
      </div>
      <div className="image-right">
          <img className="image" src={image7} alt="Course 7" />
        </div>
      </div>


      {/* Section Titles with Toggle Buttons */}
      <div className="section-buttons">
        <button onClick={() => handleSectionClick("versatility")} className={isSectionActive("versatility") ? "active" : ""}>Versatility of Java</button>
        <button onClick={() => handleSectionClick("benefits")} className={isSectionActive("benefits") ? "active" : ""}>Benefits of Using Java</button>
        <button onClick={() => handleSectionClick("companies")} className={isSectionActive("companies") ? "active" : ""}>Popular Companies Using Java</button>
      </div>

      {/* Lists */}
      <div className={`section-list ${isSectionActive("versatility") ? "active" : ""}`}>
        <h2 className="section-title"><br></br>Versatility of Java</h2>
      <p>Java is used to develop a wide variety of applications, including:</p>
      <ul>
        <li>Web applications</li>
        <li>Mobile applications</li>
        <li>Enterprise applications</li>
        <li>Desktop applications</li>
        <li>Scientific applications</li>
        <li>Embedded systems</li>
      </ul>

      <p>Java is a popular choice for developing enterprise applications because it is scalable, secure, and reliable. Java is also used to develop a number of popular mobile applications, such as Android apps.</p>
      <br></br>
      </div>

      <div className={`section-list ${isSectionActive("benefits") ? "active" : ""}`}>
        <h2 className="section-title"><br></br>Benefits of Using Java</h2>
        <ul>
        <li><strong>Portability:</strong></li><p> Java code can be run on any platform that has a JVM. This makes Java a good choice for developing applications that need to be portable.</p>
        <li><strong>Security:</strong> </li><p>Java has a number of built-in security features that help to protect Java programs from malicious code.</p>
        <li><strong>Reliability:</strong> </li><p>Java has a garbage collector, which automatically manages memory allocation and deallocation. This helps to prevent memory leaks and other common programming errors.</p>
        <li><strong>Performance:</strong></li><p> Java programs can be very performant. This is because Java code is compiled into machine code before it is executed.</p>
        <li><strong>Large community:</strong></li><p>Java has a large and active community of developers. This means that there are a lot of resources available to Java developers, such as libraries, frameworks, and tutorials.</p>
      </ul>
      <br></br>
      </div>

      <div className={`section-list ${isSectionActive("companies") ? "active" : ""}`}>
        <h2 className="section-title"><br></br>Popular Companies Using Java</h2>
      <ul>
        <li>Google</li>
        <li>Amazon</li>
        <li>Microsoft</li>
        <li>IBM</li>
        <li>Facebook</li>
        <li>Twitter</li>
        <li>LinkedIn</li>
        <li>eBay</li>
        <li>Yahoo!</li>
        <li>Netflix</li>
        <li>Spotify</li>
        <li>Airbnb</li>
      </ul>
      <br></br>
      </div>


      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Page7;
