import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import PhotoBooks from './PhotoBooks';
import AreasServed from './AreasServed';
import Backdrops from './Backdrops';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL || ''}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/photo-books" element={<PhotoBooks />} />
        <Route path="/areas-served" element={<AreasServed />} />
        <Route path="/backdrops" element={<Backdrops />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
