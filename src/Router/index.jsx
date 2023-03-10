import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Help from '../Pages/Help/index';
import Home from '../Pages/Home';
import Layout from '../Pages/Layout';
import NoPage from '../Pages/NoPage';
import AppProvider from '../Context/Provider';
import SyncPage from '../Pages/SyncPage';

const createRoutes = () => (
  <AppProvider>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sync" element={<SyncPage />} />
          <Route path="help" element={<Help />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);

export default createRoutes;
