// src/CoursePages/Page6.js
import React, { useState } from "react";
import "./Page.css";
import { Link } from "react-router-dom";
import image10 from  "./10.jpg";


function Page10() {
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
          <h1 className="course-title">Rust</h1>
          <p>
           Rust is a multi-paradigm, general-purpose programming language designed for performance and safety, especially safe concurrency. Rust is syntactically similar to C++, but can guarantee memory safety by using a borrow checker. Rust is statically typed, and has an ownership system which ensures that all data is accounted for and deallocated correctly.
          </p>
          <div className="join-course-container">
            <Link to="/join/course10" className="join-course">
              View Course
            </Link>
          </div> 
        </div>
        <div className="image-right">
          <img className="image" src={image10} alt="Course 10" />
        </div>
      </div>
      
       {/* Section Titles with Toggle Buttons */}
       <div className="section-buttons">
        <button onClick={() => handleSectionClick("versatility")} className={isSectionActive("versatility") ? "active" : ""}>Versatility of Rust</button>
        <button onClick={() => handleSectionClick("benefits")} className={isSectionActive("benefits") ? "active" : ""}>Benefits of Using Rust</button>
        <button onClick={() => handleSectionClick("companies")} className={isSectionActive("companies") ? "active" : ""}>Popular Companies Using Rust</button>
      </div>

      {/* Lists */}
      <div className={`section-list ${isSectionActive("versatility") ? "active" : ""}`}>
        <h2 className="section-title"><br></br>Versatility of Rust</h2>
      <ul>
        <li>Operating systems (e.g., Redox OS, Serenity OS)</li>
        <li>Web browsers (e.g., Firefox)</li>
        <li>Databases (e.g., CockroachDB)</li>
        <li>Game engines (e.g., Godot)</li>
        <li>Embedded systems (e.g., microcontrollers)</li>
        <li>Cloud computing (e.g., AWS Lambda)</li>
        <li>Machine learning (e.g., TensorFlow)</li>
      </ul><br></br>
      </div>

      <div className={`section-list ${isSectionActive("benefits") ? "active" : ""}`}>
        <h2 className="section-title"><br></br>Benefits of Using Rust</h2>
        <ul>
          <li><strong>Performance:</strong></li><p> Rust programs are typically very fast and can be comparable to C and C++ programs in terms of performance.</p>
          <li><strong>Safety:</strong></li><p> Rust's borrow checker and ownership system help to prevent many common programming errors, such as memory leaks and data races.</p>
          <li><strong>Concurrency:</strong></li><p> Rust makes it easy to write safe and efficient concurrent code.</p>
          <li><strong>Modern features:</strong></li><p> Rust has a number of modern features, such as generics, closures, and type inference.</p>
          <li><strong>Large community:</strong></li><p> Rust has a large and active community of developers, which means that there are many resources available to Rust developers, such as libraries, frameworks, and tutorials.</p>
        </ul><br></br>
        </div>

        <div className={`section-list ${isSectionActive("companies") ? "active" : ""}`}>
        <h2 className="section-title"><br></br>Popular Companies Using Rust</h2>
        <ul>
          <li>Amazon</li>
          <li>Cloudflare</li>
          <li>Discord</li>
          <li>Dropbox</li>
          <li>Facebook</li>
          <li>Google</li>
          <li>Microsoft</li>
          <li>Mozilla</li>
          <li>Netflix</li>
          <li>Stripe</li>
          <li>Twitter</li>
        </ul><br></br>
        </div>

      
     
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Page10;
