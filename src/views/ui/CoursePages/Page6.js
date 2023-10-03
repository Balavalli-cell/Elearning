import React, { useState } from "react";
import "./Page.css";
import { Link } from "react-router-dom";
import image6 from  "./6.jpg";

function Page6() {
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
          <button>Feedback</button>
          <button>Services</button>
          <button>Contact</button>
          <a href="/login">Login</a>
          <a href="/signup">Sign Up</a>
        </div>
      </header>

      <div className="page-container">
        <div className="content-left">
          <h1 className="course-title">Python</h1>
          <p>
            Python is a widely used general-purpose programming language. It is known for its simplicity, flexibility, and power. Python is an interpreted language, which means that Python code is executed directly, without being compiled into machine code first. This makes Python a good choice for prototyping and rapid development.
          </p>
        <div className="join-course-container">
        <Link to="/join/course6" className="join-course">
          View Course
        </Link>
        </div> 
        </div>
        <div className="image-right">
          <img className="image" src={image6} alt="Course 6" />
        </div>
      </div>

      {/* Section Titles with Toggle Buttons */}
      <div className="section-buttons">
        <button onClick={() => handleSectionClick("versatility")} className={isSectionActive("versatility") ? "active" : ""}>Versatility of Python</button>
        <button onClick={() => handleSectionClick("benefits")} className={isSectionActive("benefits") ? "active" : ""}>Benefits of Using Python</button>
        <button onClick={() => handleSectionClick("companies")} className={isSectionActive("companies") ? "active" : ""}>Popular Companies Using Python</button>
      </div>

      {/* Lists */}
      <div className={`section-list ${isSectionActive("versatility") ? "active" : ""}`}>
        <h2 className="section-title"><br></br>Versatility of Python</h2>
        <ul>
          <li>Web applications</li>
          <li>Mobile applications</li>
          <li>Desktop applications</li>
          <li>Scientific applications</li>
          <li>Machine learning applications</li>
          <li>Data science applications</li>
          <li>Embedded systems</li>
        </ul>
        <br></br>
      </div>

      <div className={`section-list ${isSectionActive("benefits") ? "active" : ""}`}>
        <h2 className="section-title"><br></br>Benefits of Using Python</h2>
        <ul>
          <li><strong>Simplicity:</strong></li><p> Python is a very simple language to learn and use. This is because Python has a clean and concise syntax.</p>
          <li><strong>Flexibility:</strong> </li><p> Python is a very flexible language. It can be used to develop a wide variety of applications.</p>
          <li><strong>Power:</strong> </li><p> Python is a very powerful language. It has a number of powerful libraries and frameworks for a variety of tasks, such as web development, data science, and machine learning.</p>
          <li><strong>Large community:</strong></li><p>  Python has a large and active community of developers. This means that there are a lot of resources available to Python developers, such as libraries, frameworks, and tutorials.</p>
        </ul>
        <br></br>
      </div>

      <div className={`section-list ${isSectionActive("companies") ? "active" : ""}`}>
        <h2 className="section-title"><br></br>Popular Companies Using Python</h2>
        <ul>
          <li>Google</li>
          <li>Facebook</li>
          <li>Netflix</li>
          <li>Amazon</li>
          <li>Spotify</li>
          <li>Microsoft</li>
          <li>NASA</li>
          <li>IBM</li>
          <li>Reddit</li>
          <li>Instagram</li>
          <li>Pinterest</li>
        </ul>
        <br></br>
      </div>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Page6;
