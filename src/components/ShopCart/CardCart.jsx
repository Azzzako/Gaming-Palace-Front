import React from 'react'
import { BsTrash2Fill } from 'react-icons/bs';
import { useDispatch } from 'react-redux'
import { deleteCart } from '../../Redux/Actions/actions';

const CardCart = ({image, name, price, stock, id}) => {

const dispatch = useDispatch();

const handleDeleteCart = (id) => {
  dispatch(deleteCart(id))
}

  return (
    <div>
        <button className='btn-del-fav' onClick={()=>handleDeleteCart(id)}>{<BsTrash2Fill/>}</button>

        <img src={image} alt='*' width='150px' height='100px'/>
        <h2>{name}</h2>
        <h4>US$ {price}</h4>
        <div>
        <input type="number" min="1" max="10" class="form-control form" style={{width: '5rem'}} />
        <span>{stock}</span>
        </div>

    </div>
  )
}

export default CardCart;