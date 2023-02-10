import React from 'react'
import { BsTypeH1 } from 'react-icons/bs';
import { useSelector } from 'react-redux'
import CardsFavs from './CardsFavs'

const ListFavs = () => {

const favourites = useSelector(state => state.favourites);



  
  return (
    <div className='list-favs'>
{
  favourites.length>0 ? <CardsFavs/> :
  <h1 color='white'>Please add items to your list</h1>
}
    </div>
  )
}

export default ListFavs;