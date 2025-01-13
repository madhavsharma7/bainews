// import React from 'react';
// import './App.css';
// import Home from "./Components/Navbar/Home"; // Home Component Import

// import { BrowserRouter } from "react-router-dom";
// function App() {
//     return (
//         <div className="App">
//             <Home />
//         </div>
//     );
// }

// export default App;


import React from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Components/Navbar/Home"; // Correct the path based on your project structure

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
      </div>
    </BrowserRouter>
  );
}

export default App;