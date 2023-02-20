import { useAuth0 } from '@auth0/auth0-react';
import React, { useState } from 'react'
import { BsTrash2Fill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux'
import { deleteItemCart, getCart, totalBuy, totalToPay } from '../../Redux/Actions/actions';
import './CardCart.css'

const CardCart = ({image, name, price, stock, id}) => {

const dispatch = useDispatch();

const {user} = useAuth0();
const users = useSelector(state=> state?.users);
const findUser = users?.find(us => us?.email === user?.email)

const prodsPay = useSelector(state=> state.totalToPay);
// const findProd = prodsPay?.find(prod => prod.idproduct === id);


const handleDeleteCart = (id) => {
  dispatch(deleteItemCart({userid: findUser.id, idproduct: id})) && setTimeout(()=>{dispatch(getCart(findUser.id))},100)
}

const [input, setInput] = useState("");
let total = input * price;

const handleInput = (e) => {
  e.preventDefault();
  setInput(e.target.value<=stock ? Number(e.target.value) : stock)
}
const handleBuy = () => {   
    if(input && input <= stock ){
    total = input * price;
    dispatch(totalToPay({name: name, price: price, quantity: input, idproduct: id, stock: stock}));
    dispatch(totalBuy(total));
    setInput("")
  } 
  else return alert(`Wrong value. Available stock (${stock})`)
}


// console.log("aca esta el findddd", findProd)
// console.log("prodsPay", prodsPay)

  return (
    <div className='cards-cart-cont'>
      <div className='card-cart'>
        <button className='cart-btn' onClick={()=>handleDeleteCart(id)}>{<BsTrash2Fill/>}</button>

        <img src={image} alt='*' width='150px' height='100px'/>
        <h4>{name}</h4>
        <h2>US$ {price}</h2>

        <div className='input-cart'>
        <input  name="qty" value={input} type="number" min="1" max={stock} class="form-control form" style={{width: '5rem'}} 
        onChange={(e)=>{handleInput(e)}}/>
        <span>Stock: {stock}</span>
        
        </div>
        <span>Total: {total}</span>
        <button className='buy-btn' onClick={()=>handleBuy()}>Add buy</button>
      </div>
    </div>
  )
}

export default CardCart;