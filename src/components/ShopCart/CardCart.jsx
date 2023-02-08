import React from 'react'

const CardCart = ({image, name, price, stock, id}) => {
  return (
    <div>
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