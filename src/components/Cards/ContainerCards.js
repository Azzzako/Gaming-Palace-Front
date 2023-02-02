import React from 'react';
import Card from './Card.js';

const ContainerCards = ({products}) => {

  return (

    <div>
      {
        products?.map(p=>(
          <Card
          key={p.id}
          id={p.id}
          image={p.image}
          name={p.name}
          description={p.description}
          fav={p.imgFav}
          cart={p.imgCart}
          />
        ))
      }
    </div>
  )
};

export default ContainerCards