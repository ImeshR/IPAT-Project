import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Leftbar from './LeftBar';
import EnrollmentForm from './EnrollmentForm';

const Home = () => {
  const [enrollmentKey, setEnrollmentKey] = useState('');

  const handleEnrollmentKeyChange = (e) => {
    setEnrollmentKey(e.target.value);
  };

  const handleEnrollmentKeySubmit = () => {
    // Handle enrollment key submission here
    console.log('Enrollment Key submitted:', enrollmentKey);
    // You can add your logic to handle the enrollment key here
  };

  return (
    <div className="landing">
      <Header />
      <section id="hero">
        <div className="container h-screen flex">
          <div className='w-full mt-5'>
            <Leftbar width="100%" />
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center">
            {/* Add your content here */}
            <EnrollmentForm/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
