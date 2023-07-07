import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './Registration.jsx';
import SearchCandidate from './SearchCandidate.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/searchcandidate" element={<SearchCandidate />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
