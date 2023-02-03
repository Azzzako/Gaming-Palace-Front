import React, { useState } from 'react';
import { Pages } from '../Pagination/Pagination.jsx';
import Card from './Card.js';

const ContainerCards = ({ products }) => {

  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(10)

  const totalProducts = products.length
  const lastPostIndex = currentPage * postPerPage
  const firstPostIndex = lastPostIndex - postPerPage
  const productsPage = products.slice(firstPostIndex, lastPostIndex)

  return (
    <div>
      <div>
      {
        productsPage?.map(p => (
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

    <Pages
    totalPost={totalProducts}
    postPerPage={postPerPage}
    setCurrentPage={setCurrentPage}
    currentPage={currentPage}
    />
    </div>
    
  )
};

export default ContainerCards
