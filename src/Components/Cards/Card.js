import React from 'react';
import { Link } from "react-router-dom";



const Card = ({image, price, name, description, fav, cart, id}) => {

  return (

    <div>
      <Link to={`/detail/${id}`}>
      <img src={image} alt='*' width='150px' height='100px'/>
      </Link>

      <h3>{price}</h3>

      <h3>{name}</h3>

      <h3>{description}</h3>

      <img src={fav}/>

      <img src={cart}/>

    </div>
  )
};

export default Card