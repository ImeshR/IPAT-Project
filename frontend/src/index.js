import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Splash from './pages/splash';
import FileHandle from './pages/Filehandle/Filehandle';
import Home from './pages/Home/home';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
  <BrowserRouter>
  <Routes>
    {/* <Route path="*" element={<Error />} /> */}
    <Route index element={<Splash />} />
    
    <Route path="/home" element={<Home />} />
    <Route path="/fileupload" element={<FileHandle />} />
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
