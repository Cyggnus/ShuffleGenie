import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Help from '../Pages/Help/index';
import Home from '../Pages/Home';
import Layout from '../Pages/Layout';
import NoPage from '../Pages/NoPage';

const createRoutes = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="help" element={<Help />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default createRoutes;