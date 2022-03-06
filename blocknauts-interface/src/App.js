import React from 'react';
import Main from './Main.js'
import Forms from './components/Forms/forms.js'
import './styles/main.css'
import { Routes, Route, Outlet, BrowserRouter as Router, } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/form" element={<Forms />} />
      </Routes>
    </Router>
);

}