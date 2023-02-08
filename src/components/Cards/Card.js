import React from 'react';
import { Link } from "react-router-dom";
import './Card.css'
import { BsCartFill, BsHeartFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, addFav, deleteCart, deleteFavs } from '../../Redux/Actions/actions.js';



const Card = ({image, price, name, description, id}) => {

  const favourites = useSelector(state=> state.favourites)
  const productsCart = useSelector(state=> state.shopCart)
  const disptach = useDispatch();
  const existFavs = favourites.map(fav => fav.id)
  const existProductsCart = productsCart.map(prod => prod.id)

  const handleFav = (id) => {
    !existFavs.includes(id) ?
    disptach(addFav(id)) :
    disptach(deleteFavs(id))
  };

  const handleCart = (id) => {
    !existProductsCart.includes(id) ?
    disptach(addCart(id)) :
    disptach(deleteCart(id))
  };

  return (
    <div className='cards'>

      <div className='img-icons'>

      <Link to={`/detail/${id}`}>
      <img src={image} alt='*' width='150px' height='100px'/>
      </Link>

        <div className='icons'>
          {
            existFavs.includes(id) ? <BsHeartFill color='red' className='icons-fav' onClick={()=>{handleFav(id)}}/>
            : <BsHeartFill className='icons-fav' onClick={()=>{handleFav(id)}}/>
          }     
        </div>

        <div className='icons'>
          {
            existProductsCart.includes(id) ? <BsCartFill color='green' className='icons-cart' onClick={()=>{handleCart(id)}}/> : 
            <BsCartFill className='icons-cart' onClick={()=>{handleCart(id)}}/>
          }          
        </div>
          
      </div>
      

      <h3>{name}</h3>

      <h3>US$ {price}</h3>

      {/* <h3>{description}</h3> */}

    </div>
  )
};

export default Card


