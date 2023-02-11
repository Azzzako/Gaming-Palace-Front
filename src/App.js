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
import AdminDashboard from './components/AdminDashboard/AdminDashboard';





function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>

      
        <Route exact path='/productform' element={<AddProduct/>}/>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/inconstruction" element={<InConstructionPage />} />
        <Route exact path="/detail/:id" element={<Detail />} />
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/review" element={<Review />} />
        

        <Route exact path="/admin-dashboard" element={<AdminDashboard/>}/>
        
        <Route exact path="/form-adress" element={<FormAdress/>}/>
        <Route exact path="/shopcart" element={<ShopCart/>}/>
        <Route exact path="/favourites" element={<ListFavs/>}/>
        <Route exact path='/products' element={<ProductList/>} />
        <Route exact path='/productform' element={<AddProduct/>} />
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
        <Route exact path="/inconstruction" element={<InConstructionPage/>} />
        <Route exact path="/detail/:id" element={<Detail/>} />
        <Route exact path="/" element={<LandingPage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
