import React from 'react';
import './App.css';
import Home from "./Components/Navbar/Home"; // Home Component Import

function App() {
    return (
        <div className="App">
            <Home /> {/* Sirf Home ko render karein */}
        </div>
    );
}

export default App;
