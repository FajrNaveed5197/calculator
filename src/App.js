import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Calculator from "./components/Calculator";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      {/* Render the Navbar component */}
      <Navbar />

      {/* Define the routes */}
      <Routes>
        {/* Route for the "Add" component */}
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </div>
  );
}

export default App;
