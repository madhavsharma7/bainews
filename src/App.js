import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Home/Home";
import Durg from "./Components/Durg/durg";
import Bhilai from "./Components/Bhilai/bhilai"
import Raipur from "./Components/Raipur/raipur"
// import Niti from "./Components/Niti/Niti"
import Term from "./Components/Terms/Terms"

// Correct the path based on your project structure

function App() {
  return (

    // <div className="App">
    //   <Nav />
    // </div>

    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* Define your routes */}
          <Route path="/" element={<Nav />} />
          <Route path="/दुर्ग" element={<Durg />} />
          <Route path="/भिलाई" element={<Bhilai />}/>
          <Route path="/रायपुर" element={<Raipur />}/>
          {/* <Route path="/गोपनीयता नीति" element={<Niti />}/> */}
          <Route path="/नियम एवं शर्तें" element={<Term />}/>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;


