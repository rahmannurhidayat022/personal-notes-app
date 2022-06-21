import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const NotesPage = lazy(() => import('./pages/Notes'));
const ArchivePage = lazy(() => import('./pages/Archive'));
const NotFoundPage = lazy(() => import('./pages/NotFound'));

root.render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<NotesPage/>}/>
          <Route path="/archives" element={<ArchivePage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </Suspense>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
