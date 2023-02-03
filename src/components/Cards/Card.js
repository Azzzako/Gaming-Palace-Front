import React from 'react';
import { Link } from "react-router-dom";
import './Card.css'


const Card = ({image, price, name, description, fav, cart, id}) => {
  return (
    <div className='cards'>

      <Link to={`/detail/${id}`}>
      <img src={image} alt='*' width='150px' height='100px'/>
      </Link>

      <h3>{name}</h3>

      <h3>${price}</h3>

      {/* <h3>{description}</h3> */}

      <h3>{fav}</h3>

      <h3>{cart}</h3>

    </div>
  )
};

export default Card


