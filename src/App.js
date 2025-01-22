import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Home/Home";
// import Durg from "./Components/Durg/durg";
// Correct the path based on your project structure

function App() {
  return (

    <div className="App">
      <Nav />
    </div>

    // <BrowserRouter>
    //   <div className="App">
    //     <Routes>
    //       {/* Define your routes */}
    //       <Route path="/" element={<Nav />} />
    //       <Route path="/दुर्ग" element={<Durg />} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>
  );
}

export default App;


