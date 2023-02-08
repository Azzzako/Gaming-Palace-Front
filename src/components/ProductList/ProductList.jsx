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

    <div className='container_all'>

      <div className='contain_search'>
    <Searchbar/>
      </div>

      <ContainerCards 
      products={products}/>
    </div>

    </div>
  )
}

export default ProductList
