import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <Routes>
      <Route path='/sample-portfolio' element={<App />}/>
      <Route path='*' element={<Navigate to='/sample-portfolio' replace />}/>
    </Routes>
  </React.StrictMode>
  </BrowserRouter>
);
