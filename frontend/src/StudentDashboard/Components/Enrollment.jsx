import React, { useState } from 'react';

const Enrollment = () => {
  const [enrollmentKey, setEnrollmentKey] = useState('');

  const handleInputChange = (e) => {
    setEnrollmentKey(e.target.value);
  };

  const handleButtonClick = () => {
    // Handle the enrollment key submission here
    // You can use the 'enrollmentKey' state variable
    // to access the entered key and perform any actions
  };

  return (
    <div className="p-4 border border-gray-300 rounded-md">
      <label htmlFor="enrollmentKey" className="block text-gray-600 font-medium mb-2">
        Enter Enrollment Key:
      </label>
      <input
        type="text"
        id="enrollmentKey"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        placeholder="Enter key"
        value={enrollmentKey}
        onChange={handleInputChange}
      />
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        onClick={handleButtonClick}
      >
        Submit
      </button>
    </div>
  );
};

export default Enrollment;
