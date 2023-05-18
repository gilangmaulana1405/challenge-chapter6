import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import CariMobil from './components/CariMobil.jsx';
import Home from './components/Home.jsx';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cars" element={<CariMobil />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
