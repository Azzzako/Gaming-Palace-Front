import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
import React, { useEffect } from 'react'
import { BsEmojiSmileFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteAllCart, getCart, restoreTotalBuy, totalBuy } from '../../Redux/Actions/actions';
import CardCart from './CardCart';
import './ShopCart.css'
import './CardCart.css'

const ShopCart = () => {

  const dispatch = useDispatch();

  const productsCart = useSelector(state => state.shopCart);
  const totalBuyOk = useSelector(state => state.totalBuy);

  const prodsPay = useSelector(state=> state.totalToPay);
  const totalAmounts = prodsPay?.map(prod => prod.quantity * prod.price);
  const totalBuyOk2 = totalAmounts.length>1 ? totalAmounts.reduce((acc, curr)=> acc + curr) : totalAmounts;


const {user} = useAuth0();
const users = useSelector(state=> state?.users);
const findUser = users?.find(us => us?.email === user?.email)

  const restoreTotal = () => {
    dispatch(restoreTotalBuy());
  }

  useEffect(()=>{
    dispatch(getCart(findUser?.id))
    dispatch(totalBuy())
  },[dispatch])


  return (
    <div className='shop'>

      <Button onClick={()=> dispatch(deleteAllCart({userid: findUser?.id}))}>Delete all products</Button>

      <b>Shop Cart</b><BsEmojiSmileFill color='green'/>
      <div id='total-buy'>Total buy: {totalBuyOk || totalBuyOk2}</div>
      <button onClick={()=>restoreTotal()}>Restore</button>
      <button className='restore-btn' onClick={()=>restoreTotal()}>Restore</button>
      {/* <b>Shop Cart</b><BsEmojiSmileFill color='green'/> */}
      <div className='total-buy' id='total-buy'>Total buy: US$ {totalBuyOk}
      
      {
        totalBuyOk>0 && <Link to="/showorder"><button className='go-btn'>Go to pay</button></Link>
      }      
      </div>
      <div >
      {
        productsCart?.length>0 && productsCart?.map(prod => {
          return (
            <div className='cards-cart'>
              <CardCart
                image={prod.imageurl}
                name={prod.namedisplay}
                price={prod.price}
                stock={prod.stock}
                id={prod.id}
                key={prod.id}
                />
            </div>
          )
        }) 
      }
      </div>  
    </div>
  )
}

export default ShopCart;