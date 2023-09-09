import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Router} from "react-router-dom";
import Splash from './pages/splash';
import FileHandle from './pages/Filehandle/Filehandle';
import Home from './pages/Home/home';
import AdminDashboard from './pages/Admin/dashboard';
import Instructor from './pages/Admin/instructor';
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
  </Routes>
</BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
