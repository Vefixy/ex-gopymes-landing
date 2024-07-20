import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import Login from './pages/login';

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default CustomRoutes;
