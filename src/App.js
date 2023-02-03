import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import InConstructionPage from "./components/InconstructionPage/InConstructionPage";
import LandingPage from "./components/LandingPage/LandingPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/myprofile" element={<InConstructionPage />} />
        <Route exact path="/detail/:id" element={<Detail />} />
        <Route exact path="/landing" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
