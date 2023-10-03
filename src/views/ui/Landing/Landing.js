import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./Landing.css";
import image1 from "../CoursePages/1.jpg";
import image2 from "../CoursePages/2.jpg";
import image3 from "../CoursePages/3.jpg";
import image4 from "../CoursePages/4.jpg";
import image5 from "../CoursePages/5.jpg";
import image6 from "../CoursePages/6.jpg";
import image7 from "../CoursePages/7.jpg";
import image8 from "../CoursePages/8.jpg";
import image9 from "../CoursePages/9.jpg";
import image10 from "../CoursePages/10.jpg";
import image11 from "../CoursePages/11.jpeg";

function Landing() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const containers = useMemo(() => [
    {
      id: 1,
      imgUrl: image1,
    },
    {
      id: 2,
      imgUrl: image2,
    },
    {
      id: 3,
      imgUrl: image3,
    },
    {
      id: 4,
      imgUrl: image4,
    },
    {
      id: 5,
      imgUrl: image5,
    },
  ], []);

  const moreContainers = [
    {
      id: 6,
      imgUrl: image6,
    },
    {
      id: 7,
      imgUrl: image7,
    },
    {
      id: 8,
      imgUrl: image8,
    },
    {
      id: 9,
      imgUrl: image9,
    },
    {
      id: 10,
      imgUrl: image10,
    },
    {
      id: 11,
      imgUrl: image11,
    },
  ];

  const changeImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % containers.length);
  }, [containers]);

  useEffect(() => {
    // Set interval to change the image every 5 seconds
    const interval = setInterval(changeImage, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [changeImage]); // Include changeImage in the dependency array

  const handleContainerClick = () => {
    changeImage();
  };

  return (
    <div>
      <header className="header">
        <a href="/">
          <h1>E-Learning</h1>
        </a>
        <div> 
          <Link to="/LoginPage">
            <button className="header-buttons">Login</button>
          </Link>
          <Link to="/SignupPage">
            <button className="header-buttons">Signup</button>
          </Link>
        </div>
      </header>

      <div className="container" onClick={handleContainerClick}>
        <div className="content">
        <img src={containers[currentIndex].imgUrl} alt="" />
        </div>
        <div className="radio-buttons">
          {containers.map((item, index) => (
            <input
              key={item.id}
              type="radio"
              name="image-radio"
              checked={currentIndex === index}
              onChange={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      <h1 className="title">Courses Offered</h1>

      <div className="course-grid">
        {moreContainers.map((item) => (
          <div key={item.id} className="course-container">
            <img className="course-image" src={item.imgUrl} alt="" />
            <Link to={`/Page${item.id}`} className="course-link">
              View Course
            </Link>
          </div>
        ))}
      </div>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
        </footer>
    </div>
  );
}

export default Landing;
