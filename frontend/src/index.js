import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Router} from "react-router-dom";
import Splash from './pages/splash';
import FileHandle from './pages/Filehandle/Filehandle';
import Home from './pages/Home/home';
import AdminDashboard from './pages/Admin/dashboard';
import Instructor from './pages/Admin/instructor';
import Labroom from './pages/Admin/labroom';
import Students from './pages/Admin/students';

import StudentDashboard from './StudentDashboard/StudentDashboard'
import SignUp from './pages/auth/SignUp';
import SignIn from'./pages/auth/SignIn'
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
  <BrowserRouter>
  <Routes>
    {/* <Route path="*" element={<Error />} /> */}
    <Route index element={<Splash />} />
    <Route path="/home" element={<Home />} />
    <Route path="/fileupload" element={<FileHandle />} />
    <Route path="/admin/dashboard" element={<AdminDashboard />} />
    <Route path="/admin/instructor/managemnet" element={<Instructor />} />
    <Route path="/admin/labroom/management" element={<Labroom />} />
    <Route path="/admin/students/management" element={<Students />} />


    <Route path="/studentdashboard" element={<StudentDashboard />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
  </Routes>
</BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
