import React from 'react'
import { BsEmojiSmileFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import CardCart from './CardCart';
import './ShopCart.css'

const ShopCart = () => {

  const productsCart = useSelector(state => state.shopCart);

  return (
    <div className='shop'>
      Shop Cart, baby<BsEmojiSmileFill/>
      {
        productsCart.length>0 && productsCart.map(prod => {
          return (
            <div>
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