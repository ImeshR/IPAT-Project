import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Splash from './pages/splash';
import Login from './pages/Auth/login/login';
import Signup from './pages/Auth/Signup/Signup';
import StudentDashboard from './pages/stduent/student_dashboard/student-dashboard';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
  <BrowserRouter>
  <Routes>
    {/* <Route path="*" element={<Error />} /> */}
    <Route index element={<Splash />} />
    <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/student/dashboard" element={<StudentDashboard />} />

    {/* <Route
          path='/student/dashboard'
          element={isLoggedIn ? <StudentDashboard /> : <Navigate to="/login" />}
        /> */}
    
  </Routes>
</BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
