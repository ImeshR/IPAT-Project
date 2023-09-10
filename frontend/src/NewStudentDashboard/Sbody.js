import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Sbody = () => {
  const [enrollmentKey, setEnrollmentKey] = useState(""); // State to store the enrollment key
 
  const handleInputChange = (e) => {
    // Update the enrollmentKey state when the input value changes
    setEnrollmentKey(e.target.value);
  };

  const handleButtonClick = () => {
    // Navigate to the new URL with the enrollment key as a parameter
    window.location.href = `/studnetlabroom/${enrollmentKey}`;
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-4 mt-4 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Enter Enrollment Key
          </h1>
          <div className="flex">
            <input
              type="text"
              className="p-2 border border-gray-300 rounded-l-md flex-grow focus:outline-none focus:border-blue-500"
              placeholder="Enter key"
              value={enrollmentKey}
              onChange={handleInputChange} // Update the state on input change
            />
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none"
              onClick={handleButtonClick}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sbody;
