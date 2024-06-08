import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/index';

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default CustomRoutes;
