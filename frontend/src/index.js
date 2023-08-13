import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/home';
import Splash from './pages/splash';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    {/* <Route path="*" element={<Error />} /> */}
    <Route index element={<Splash />} />
    <Route path="/home" element={<Home />} />
  </Routes>
</BrowserRouter>
);
