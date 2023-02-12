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
              
             <Link to={`/detail/${fav.id}`}> <img src={fav.imageurl} alt='*' width='150px' height='100px'/></Link>
              

              
              
              <h5>{fav.namedisplay}</h5>
          
              <h4><b>US$ {fav.price}</b></h4>
              <button className='fav-btn' onClick={()=>handleDeleteFav(fav.id)}>{<BsTrashFill/>}</button>
              
            </div>

            })
        }
  
      </div>
    )
  };
  
  export default CardsFavs;