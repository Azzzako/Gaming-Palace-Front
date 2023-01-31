import React from "react";
import Card from "../Components/Card/Card";



const ContainerCards = ({products}) => {

  return (
    <div>
      {
        products?.map(prod=>(
          <Card
          id={prod.id}
          image={prod.image}
          price={prod.price}
          name={prod.name}
          description={prod.description}
          fav={imgfav}
          cart={imgCart}
          key={prod.id}
          />
        ))
      }
    </div>
  )
};

export default ContainerCards