import { useDispatch, useSelector } from "react-redux";
import './CardsFavs.css'
import { deleteFavs } from "../../Redux/Actions/actions";
import { BsTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";


const CardsFavs = () => {

const favourites = useSelector(state => state.favourites);
const dispatch = useDispatch();

const handleDeleteFav = (id) => {
  dispatch(deleteFavs(id))
}
   
  
    return (
      <div className='cards-favs-cont'>
        {
            favourites.length>0 && favourites.map(fav=>{
            return <div className='cards-favs'>
              <Link to={`/detail/${fav.id}`}>
              <img src={fav.imageurl} alt='*' width='150px' height='100px'/>
              </Link>

              <button className='btn-del-fav' onClick={()=>handleDeleteFav(fav.id)}>{<BsTrashFill/>}</button>
              
              <h3>{fav.namedisplay}</h3>
          
              <h3><b>US${fav.price}</b></h3>
          
              <h3>{fav.description}</h3>
            </div>

            })
        }
  
      </div>
    )
  };
  
  export default CardsFavs;