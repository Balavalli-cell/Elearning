// src/CoursePages/Page6.js
import React, { useState }  from "react";
import "./Page.css";
import { Link } from "react-router-dom";
import image11 from  "./11.jpeg";


function Page11() {
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
          <button><strong>Blog</strong></button>
          <button><strong>FeedBack</strong></button>
          <button><strong>Services</strong></button>
          <button><strong>Contact</strong></button>
          <a href="/login">Login</a>
          <a href="/signup">Sign Up</a>
        </div>
      </header>

      <div className="page-container">
        <div className="content-left">
          <h1 className="course-title">C Programming</h1>
          <p>
        The C programming language is a general-purpose computer programming language that is widely used for developing operating systems, embedded systems, and other system-level software. It is also a popular choice for developing high-performance applications, such as games and graphics processing software.
          </p>
          <div className="join-course-container">
            <Link to="/join/course6" className="join-course">
              View Course
            </Link>
            </div>  
        </div>
        <div className="image-right">
          <img className="image" src={image11} alt="Course 11" />
        </div>
      </div>

      
      {/* Section Titles with Toggle Buttons */}
      <div className="section-buttons">
        <button onClick={() => handleSectionClick("versatility")} className={isSectionActive("versatility") ? "active" : ""}>Versatility of C</button>
        <button onClick={() => handleSectionClick("benefits")} className={isSectionActive("benefits") ? "active" : ""}>Benefits of Using C</button>
        <button onClick={() => handleSectionClick("companies")} className={isSectionActive("companies") ? "active" : ""}>Popular Companies Using C</button>
      </div>

      {/* Lists */}
      <div className={`section-list ${isSectionActive("versatility") ? "active" : ""}`}>
        <h2 className="section-title"><br></br>Versatility of C</h2>
        <ul>
          <li>Operating systems: Linux, macOS, and Unix are all written in C.</li>
          <li>Embedded systems: C is widely used for developing embedded systems, such as microcontrollers and microprocessors.</li>
          <li>System software: C is used to develop system software, such as device drivers, compilers, and assemblers.</li>
          <li>Networking: C is widely used for developing networking applications, such as web servers, network protocols, and network drivers.</li>
          <li>Database systems: C is used to develop database systems, such as Oracle, MySQL, and PostgreSQL.</li>
          <li>Games: C is a popular choice for developing games, such as Doom, Quake, and Counter-Strike.</li>
          <li>Graphics processing software: C is used to develop graphics processing software, such as Adobe Photoshop and GIMP.</li>
        </ul><br></br>
        </div>
      
      <div className={`section-list ${isSectionActive("benefits") ? "active" : ""}`}>
        <h2 className="section-title"><br></br>Benefits of Using C</h2>
         <ul>
          <li><strong>Portability:</strong></li><p> C programs can be compiled and run on a wide variety of platforms, including computers, smartphones, and embedded systems.</p>
          <li><strong>Efficiency:</strong></li><p> C programs are typically very efficient, and can be comparable to assembly language programs in terms of performance.</p>
          <li><strong>Flexibility:</strong></li><p> C is a very flexible language, and it can be used to develop a wide variety of applications.</p>
          <li><strong>Large community:</strong></li><p> C has a large and active community of developers, which means that there are many resources available to C developers, such as libraries, frameworks, and tutorials.</p>
        </ul><br></br>
        </div>

        <div className={`section-list ${isSectionActive("companies") ? "active" : ""}`}>
        <h2 className="section-title"><br></br>Popular Companies Using C</h2>
        <ul>
          <li>Google</li>
          <li>Microsoft</li>
          <li>Apple</li>
          <li>Amazon</li>
          <li>IBM</li>
          <li>Oracle</li>
          <li>Adobe</li>
          <li>Intel</li>
          <li>Nvidia</li>
          <li>Cisco</li>
          <li>Samsung</li>
          <li>Huawei</li>
        </ul><br></br>
        </div>

        
    
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Page11;
