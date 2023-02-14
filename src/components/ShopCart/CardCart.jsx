import { useAuth0 } from '@auth0/auth0-react';
import React, { useState } from 'react'
import { BsTrash2Fill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux'
import { deleteItemCart, getCart, totalBuy, totalToPay } from '../../Redux/Actions/actions';

const CardCart = ({image, name, price, stock, id}) => {

const dispatch = useDispatch();

const {user} = useAuth0();
const users = useSelector(state=> state?.users);
const findUser = users?.find(us => us?.email === user?.email)





const handleDeleteCart = (id) => {
  dispatch(deleteItemCart({userid: findUser.id, idproduct: id})) && setTimeout(()=>{dispatch(getCart(findUser.id))},100)
}

const [input, setInput] = useState("");
const total = input * price;

const handleInput = (e) => {
  e.preventDefault();
  setInput(Number(e.target.value))
}

const handleBuy = () => {
  dispatch(totalBuy(total));
  dispatch(totalToPay({name: name, price: price, quantity: input, idproduct: id}));
  setInput("")
}

  return (
    <div>
        <button className='btn-del-fav' onClick={()=>handleDeleteCart(id)}>{<BsTrash2Fill/>}</button>

        <img src={image} alt='*' width='150px' height='100px'/>
        <h2>{name}</h2>
        <h4>US$ {price}</h4>

        <div>
        <input name="qty" value={input} type="number" min="1" max="10" class="form-control form" style={{width: '5rem'}} 
        onChange={(e)=>{handleInput(e)}}/>
        <span>{stock}</span>
        </div>

        <button onClick={()=>handleBuy()}>Add buy</button><span>Total: {total}</span>
    </div>
  )
}

export default CardCart;