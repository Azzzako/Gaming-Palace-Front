import React from 'react';
import { Link } from "react-router-dom";
import './Card.css'

import { BsCartFill, BsStarFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addFav } from '../../Redux/Actions/actions';



const Card = ({image, price, name, description, id}) => {


  const disptach = useDispatch();

  const handleFav = (id) => {
    disptach(addFav(id));
  };

  return (
    <div className='cards'>

      <div className='img-icons'>
      <Link to={`/detail/${id}`}>
      <img src={image} alt='*' width='150px' height='100px'/>
      </Link>
        <div className='icons'>
        <BsStarFill onClick={()=>{handleFav(id)}}/>
        <BsCartFill/>
        </div>
      </div>
      

      <h3>{name}</h3>

      <h3>US${price}</h3>

      {/* <h3>{description}</h3> */}

    </div>
  )
};

export default Card


