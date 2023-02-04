import LandingPage from './components/LandingPage/LandingPage';
import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail'
import InConstructionPage from './components/InconstructionPage/InConstructionPage';
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProduct from './components/AddProduct/AddProduct';
import Footer from '../src/components/Footer/Footer'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      
        <Route exact path='/productform' element={<AddProduct/>}/>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/myprofile" element={<InConstructionPage />} />
        <Route exact path="/detail/:id" element={<Detail />} />
        <Route exact path="/" element={<LandingPage />} />
        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
