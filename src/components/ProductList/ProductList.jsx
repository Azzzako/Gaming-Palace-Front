import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import 'react-multi-carousel/lib/styles.css';
// import icono1 from "../../image/imgCarrusel/logo1.png";
import "./ProductList.css";
import { getAllProducts } from '../../Redux/Actions/actions';
import ContainerCards from '../Cards/ContainerCards';
import { Searchbar } from '../Searchbar/Searchbar';


const ProductList = () => {
  

  const dispatch = useDispatch()
  const products = useSelector((state) => state.allProducts)

  useEffect(() => {
    dispatch(getAllProducts())
  },[dispatch])
  
  return (
    <div className='background'>   
            <h1 className='name_prod'>Products</h1>

    <div className='container_all'>

      
    <Searchbar/>
      

      <ContainerCards 
      products={products}/>
    </div>

    </div>
  )
}

export default ProductList
