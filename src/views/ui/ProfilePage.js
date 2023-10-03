// ProfilePage.js

import React, { useState } from "react";
import Forms from "./Profileform";
import About from "./About";

const ProfilePage = () => {
  // State to store user data
  const [userData, setUserData] = useState({});

  // Function to update user data
  const updateUserData = (data) => {
    setUserData(data);
  };

  return (
    <div>
      <h1>User Profile</h1>
      <Forms updateUserData={updateUserData} />
      <About userData={userData} />
    </div>
  );
};

export default ProfilePage;
