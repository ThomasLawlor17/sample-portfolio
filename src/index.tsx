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
      <Route path='/' element={<App />}/>
      <Route path='*' element={<Navigate to='/' replace />}/>
    </Routes>
  </React.StrictMode>
  </BrowserRouter>
);
