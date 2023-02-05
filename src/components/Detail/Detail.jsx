import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {getDetail} from '../../Redux/Actions/actions'
import { Link } from 'react-router-dom';
import { BsHeartFill } from 'react-icons/bs';
import { addFav, deleteFavs } from '../../Redux/Actions/actions.js';
import s from './Detail.modules.css'
const Detail = (props) => {


	const detail = useSelector((i) => i.details);


	const dispatch = useDispatch();
  const { id } = useParams();
	const { history } = props; 

	const goHome = () => {
		history.goHome();
	};

	useEffect(() => {
		dispatch(getDetail(id));
	},[]);

  
  const favourites = useSelector(state=> state.favourites)
  const existFavs = favourites.map(fav => fav.id)

  const handleFav = (id) => {
    !existFavs.includes(id) ?
    dispatch(addFav(id)) :
    dispatch(deleteFavs(id))
  };
	return (

		<div className='bkg'>
			
		<div>
		
    


			<div >
				{detail && 
					
          <div className='container align-items-center p-5 mt-5'>
            <Link to={"/home"}>
            <button className="button btn btn-secondary" onClick={goHome}>HOME {'> '}{detail.category} </button></Link>
	          <div className="row detailsContainer d-flex flex-column align-items-center">
              <div className="card row detailsContainer d-flex flex-column align-items-center">
              <div className=" col-12 d-flex flex-sm-column flex-md-row align-items-center justify-content-center">
                <div className="d-flex img-fluid justify-content-center">
                      <img src={detail.imageurl}  className="img-fluid" alt="img" />
                </div>

                <div className="container-title">
                  <div className="container p-3 d-flex flex-column align-items-start justify-content-around border-start border-dark border-opacity-10 my-5">

                    <div className="d-flex flex-column align-items-start justify-content-around" >
                          <div className='d-grid gap-3 col-10 mx-auto'>
                          <h6 className='text-muted'>{detail.trademark}</h6>
                          <h2 className="d-flex flex-column align-items-start text-uppercase tx4 my-3">{detail.name}</h2>
                          <h6 className='text-muted'>{detail.description}</h6>
                          </div>
                    </div>

                      {/* HACER RESPONSIVES BOTONES */}
                      <div class=" form-outline item col-10 mx-auto " >
                          <h3 className='my-3'>US${detail.price} </h3>
                          <div className='d-flex gap-2 my-3'>
                            <input type="number" min="1" max="10" class="form-control form" style={{width: '5rem'}} />

                          <div className={s.icons}>
                        {
                          existFavs.includes(id) ? <BsHeartFill color='red' className={s.iconsfav} onClick={()=>{handleFav(id)}}/>
                          : <BsHeartFill className={s.iconsfav} onClick={()=>{handleFav(id)}}/>
                        }     
                      </div> 
                      </div>
                      </div>


                      
                    <div className='d-grid gap-2 col-10 mx-auto'>
                    <Link to={`/myprofile`}>
                        <button type="button" class="btn btn-outline-secondary my-2" style={{width: '20rem'}}>Shop Now</button>
                    </Link>
                    <Link to={`/myprofile`}>
                        <button type="submit" className="button btn btn-secondary my-2" style={{width: '20rem'}}>Add to cart</button>
                    </Link>
                    </div>
                      



                  </div>
                </div>
							</div>
						</div>
					  </div>
          </div>
				}
			
		</div>
		</div>
    </div>
  )
};

export default Detail;
