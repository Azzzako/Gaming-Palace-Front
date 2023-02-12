import LandingPage from './components/LandingPage/LandingPage';
import React from 'react';
import Navbar from './components/Navbar/Navbar'
import ProductList from './components/ProductList/ProductList';
import { Home } from './components/Home/Home';
import Detail from './components/Detail/Detail'
import InConstructionPage from './components/InconstructionPage/InConstructionPage';
import "./App.css"
import { Route, Routes } from 'react-router-dom';
import AddProduct from './components/AddProduct/AddProduct';
import Review from './components/Review/Review';
import Footer from '../src/components/Footer/Footer'
import ListFavs from './components/ListFavs/ListFavs';
import { Dashboard } from './components/Dashboard/Dashboard';
import ShopCart from './components/ShopCart/ShopCart';
import FormAdress from './components/ShopCart/FormAdress';
import { ConfirmData } from './components/ConfirmData/ConfirmData';





function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/productform' element={<AddProduct/>}/>
        <Route exact path="/home" element={<Home />} />
        <Route path="/inconstruction" element={<InConstructionPage />} />
        <Route path="/detail/:id" element={<Detail />} />
        {/* <Route path='/login/savedata' element={<ConfirmData/>}/> */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/review" element={<Review />} />
        <Route path="/form-adress" element={<FormAdress/>}/>
        <Route path="/shopcart" element={<ShopCart/>}/>
        <Route path="/favourites" element={<ListFavs/>}/>
        <Route path='/products' element={<ProductList/>} />
        <Route path='/productform' element={<AddProduct/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/inconstruction" element={<InConstructionPage/>} />
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="/" element={<LandingPage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
