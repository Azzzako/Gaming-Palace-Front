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
import Footer from '../src/components/Footer/Footer'
import ListFavs from './components/ListFavs/ListFavs';

import { Dashboard } from './components/Dashboard/Dashboard';

import ShopCart from './components/ShopCart/ShopCart';
import FormAdress from './components/ShopCart/FormAdress';
import { AuthProvider } from './context/authContext';

// imports auth

import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AuthProvider>
      <Routes>

        <Route exact path="/form-adress" element={<FormAdress/>}/>
        <Route exact path="/shopcart" element={
        <ProtectedRoute>
       <ShopCart/>
        </ProtectedRoute>
 
        }/>
        <Route exact path="/favourites" element={
        <ProtectedRoute>
          <ListFavs/>
        </ProtectedRoute>
        }/>
        <Route exact path='/products' element={<ProductList/>} />
        <Route exact path='/productform' element={<AddProduct/>} />
        <Route exact path="/home" element={
          <ProtectedRoute>
              <Home/>
          </ProtectedRoute>
        } />
        <Route exact path="/dashboard" element={<Dashboard/>} />
        <Route exact path="/inconstruction" element={<InConstructionPage/>} />
        <Route exact path="/detail/:id" element={<Detail/>} />
        <Route exact path="/" element={<LandingPage/>} />
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
</Routes>
      </AuthProvider>
      <Footer />
    </div>
  );
}

export default App;
