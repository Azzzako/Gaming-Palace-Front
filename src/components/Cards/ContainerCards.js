import React, { useState } from 'react';
<<<<<<< HEAD
import { Pagination } from '../Pagination/Pagination.jsx';
import Card from './Card';
import './Card.css'
=======
import { Pages } from '../Pagination/Pagination.jsx';
import Card from './Card.js';
>>>>>>> DEVELOP

const ContainerCards = ({ products }) => {

  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(12)

  const totalProducts = products.length
  const lastPostIndex = currentPage * postPerPage
  const firstPostIndex = lastPostIndex - postPerPage
  const productsPage = products.slice(firstPostIndex, lastPostIndex)

  return (
    <div>
      <div className='containerCards'>
      {
        productsPage?.map(p => (
          <Card
            key={p.id}
            id={p.id}
            image={p.imageurl}
            name={p.namedisplay}
            price={p.price}
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
