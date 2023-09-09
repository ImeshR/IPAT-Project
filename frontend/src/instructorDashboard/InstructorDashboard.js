import React from 'react';
import Sidebar from './InstructorSidebar';
import Header from './Header';

const InstructorDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-4 ">
       
        <div className="grid grid-cols-2 gap-4 mt-4">
          {/* Card 1 */}
          <div className="bg-white p-4 rounded-lg shadow-md h-48"> {/* Adjust the height using h-xx */}
            {/* Add content for card 1 here */}
          </div>

          {/* Card 2 */}
          <div className="bg-white p-4 rounded-lg shadow-md h-48"> {/* Adjust the height using h-xx */}
            {/* Add content for card 2 here */}
          </div>
        </div>

        {/* Third Card (larger) */}
        <div className="bg-white p-6 rounded-lg shadow-md mt-4 h-64"> {/* Adjust the height using h-xx */}
          {/* Add content for the larger third card here */}
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard;
