import React from 'react';
import Sidebar from './Sidebar';

const Sbody = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-4">
        <div className="mt-4">
          <h1 className="text-2xl font-bold">Enter Enrollment Key</h1>
          <div className="flex mt-2">
            <input
              type="text"
              className="p-2 border border-gray-300 rounded-l-md flex-grow focus:outline-none focus:border-blue-500"
              placeholder="Enter key"
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sbody;
