import React, { useState } from 'react'
import { BsTrash2Fill } from 'react-icons/bs';
import { useDispatch } from 'react-redux'
import { deleteCart, totalBuy } from '../../Redux/Actions/actions';

const CardCart = ({image, name, price, stock, id}) => {

const dispatch = useDispatch();

const handleDeleteCart = (id) => {
  dispatch(deleteCart(id))
}

const [input, setInput] = useState("");
const total = input * price;

const handleInput = (e) => {
  e.preventDefault();
  setInput(e.target.value)
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

        <button onClick={()=>dispatch(totalBuy(total))}>Add buy</button><span>Total: {total}</span>
    </div>
  )
}

export default CardCart;