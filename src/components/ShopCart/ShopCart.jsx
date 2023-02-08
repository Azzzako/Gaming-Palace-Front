import React from 'react'
import { BsEmojiSmileFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { restoreTotalBuy } from '../../Redux/Actions/actions';
import CardCart from './CardCart';
import './ShopCart.css'

const ShopCart = () => {

  const productsCart = useSelector(state => state.shopCart);
  const totalBuy = useSelector(state => state.totalBuy);
  const totalBuyOk = totalBuy.length>1 ? totalBuy.reduce((acc, curr)=> acc+curr) : totalBuy;
  const disptach = useDispatch();

  const restoreTotal = () => {
    disptach(restoreTotalBuy());
  }

  

  return (
    <div className='shop'>
      Shop Cart, baby<BsEmojiSmileFill/>
      <div>Total buy: {totalBuyOk}
      <button onClick={()=>restoreTotal()}>Restore</button>
      <Link to="/form-adress"><button>Go to pay</button></Link>
      </div>
      {
        productsCart.length>0 && productsCart.map(prod => {
          return (
            <div className='cards-cart'>
              <CardCart
                image={prod.imageurl}
                name={prod.namedisplay}
                price={prod.price}
                stock={10}
                id={prod.id}
                />
            </div>
          )
        }) 
      }
        
    </div>
  )
}

export default ShopCart;