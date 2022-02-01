import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <div className="side-bar">
        <Navbar />
      </div>
      <div className="main-content">
        <div className="content">
          <Routes>
            <Route path="/" exact element={<Homepage />} />
            <Route path="/about" exact element={<AboutPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
