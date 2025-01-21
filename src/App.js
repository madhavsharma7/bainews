import React from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Components/Home/Home"; // Correct the path based on your project structure

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