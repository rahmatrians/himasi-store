import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Detail from './Detail'
import './index.css'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Router>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/Detail" element={<Detail />} />
  </Routes>
</Router>
  </React.StrictMode>
)