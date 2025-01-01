// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Geocoding from './Geocoding';
import ReverseGeocoding from './ReverseGeocoding';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <nav>
                    <div className="logo">
                        <Link to="/">
                            <img src="https://img.icons8.com/?size=100&id=Q82WjgdMEzoU&format=png&color=000000" alt="Logo" />
                        </Link>
                    </div>
                    <ul>
                        <li>
                            <Link to="/">Geocoding</Link>
                        </li>
                        <li>
                            <Link to="/reverse-geocoding">Reverse Geocoding</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Geocoding />} />
                    <Route path="/reverse-geocoding" element={<ReverseGeocoding />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;