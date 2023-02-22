import LandingPage from './components/LandingPage/LandingPage';
import React from 'react';
import Navbar from './components/Navbar/Navbar'
import ProductList from './components/ProductList/ProductList';
import { Home } from './components/Home/Home';
import Detail from './components/Detail/Detail'
import InConstructionPage from './components/InconstructionPage/InConstructionPage';
import "./App.css"
import { Route, Routes } from 'react-router-dom';
// import AddProduct from './components/AddProduct/AddProduct';
import Review from './components/Review/Review';
import Footer from '../src/components/Footer/Footer'
import ListFavs from './components/ListFavs/ListFavs';

import ShopCart from './components/ShopCart/ShopCart';
import FormAdress from './components/ShopCart/FormAdress';

import OrderList from './components/ShopCart/OrderList';
// import ProductsTable from './components/AdminDashboard/ProductsTable/ProductsTable';
// import UsersTable from './components/AdminDashboard/UsersTable/UsersTable'

// import { ConfirmData } from './components/ConfirmData/ConfirmData';

// import Dashboard from './components/AdminDashboard/data/scenes/dashboard/Dashboard'

// import AdminDashboard from './components/AdminDashboard/AdminDashboard';
// import SideBar from './components/AdminDashboard/SideBar';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import UsersPanel from './components/AdminDashboard/UsersPanel';
import Sales from './components/AdminDashboard/Sales';
import ProductsTable from './components/AdminDashboard/ProductsTable';
import FAQ from './components/AdminDashboard/faq';
import AddProduct from './components/AdminDashboard/AddProduct/AddProduct';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>

        <Route exact path="/showorder" element={<OrderList/>}/>
      
        {/* <Route exact path='/productform' element={<AddProduct/>}/> */}
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/inconstruction" element={<InConstructionPage />} />
        <Route exact path="/detail/:id" element={<Detail />} />
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/review" element={<Review />} />
        
        
        <Route exact path="/form-adress" element={<FormAdress/>}/>

        <Route exact path="/shopcart" element={<ShopCart/>}/>
        <Route exact path="/favourites" element={<ListFavs/>}/>
        <Route exact path='/products' element={<ProductList/>} />


      
        <Route exact path="/admin-dashboard" element={<AdminDashboard/>} />
        <Route exact path="/admin-users" element={<UsersPanel/>} />
        <Route exact path="/admin-sales" element={<Sales/>} />
        <Route exact path="/admin-products" element={<ProductsTable/>} />
        <Route exact path="/admin-faq" element={<FAQ/>} />
        <Route exact path="/admin-products-form" element={<AddProduct/>} />


        {/* <Route exact path="/admin-dashboard" element={<AdminDashboard/>}/>
        <Route exact path="/admin-dashboard-products" element={<ProductsTable/>} />
        <Route exact path="/admin-dashboard-users" element={<UsersTable/>} /> */}
        {/* <Route exact path="/admin-dashboard-sales" element={<SalesTable/>} /> */}




        {/* <Route path='/login/savedata' element={<ConfirmData/>}/> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
