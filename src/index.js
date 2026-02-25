import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import PhotoBooks from './PhotoBooks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/nwpb_updates">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/photo-books" element={<PhotoBooks />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
