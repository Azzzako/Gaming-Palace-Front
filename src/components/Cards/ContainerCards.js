import React, { useState } from 'react';
import { Pagination } from '../Pagination/Pagination.jsx';
import Card from './Card.js';

const ContainerCards = ({ products }) => {

  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(10)

  const totalProducts = products.length
  const lastPostIndex = currentPage * postPerPage
  const firstPostIndex = lastPostIndex - postPerPage

  return (
    <div>
      <div>
      {
        products?.map(p => (
          <Card
            key={p.id}
            id={p.id}
            image={p.imageurl}
            name={p.name}
            description={p.description}
            fav={p.imgFav}
            cart={p.imgCart}
          />
        ))
      }
    </div>

    <Pagination
    totalPost={totalProducts}
    postPerPage={postPerPage}
    setCurrentPage={setCurrentPage}
    />
    </div>
    
  )
};

export default ContainerCards
