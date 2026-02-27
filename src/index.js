import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import PhotoBooks from './PhotoBooks';
import AreasServed from './AreasServed';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/nwpb_updates">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/photo-books" element={<PhotoBooks />} />
        <Route path="/areas-served" element={<AreasServed />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
