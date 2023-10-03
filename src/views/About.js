// About.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const About = () => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    // Make a GET request to fetch user data from the database
    axios
      .get("/api/userdata") // Replace with the actual API endpoint
      .then((response) => {
        setUserData(response.data); // Assuming response.data contains name and email
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>About Page</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      {/* Display other user data from the database */}
      <Link to="/Profileform">Edit</Link>
    </div>
  );
};

export default About;
