import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getDetail, newReview } from '../../Redux/Actions/actions';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import './Review.css'
import { useParams } from 'react-router-dom';



const Review = () => {


//////////////////////RATING

const { name } = useParams();
const [number, setNumber] = useState(0);
const [hoverStar, setHoverStar] = useState(undefined);

const handleText = () => {
  switch (number || hoverStar) {
    case 0:
      return "Evaluate";
    case 1:
      return "Dissatifation";
    case 2:
      return "Unsatisfied";
    case 3:
      return "Normal";
    case 4:
      return "Satisfied";
    case 5:
      return "Very Satisfied";
    default:
      return "Evaluate";
  }
};

const handlePlaceHolder = () => {
  switch (number || hoverStar) {
    case 0:
      return "Comment here...";
    case 1:
    case 2:
    case 3:
    case 4:
      return "What is your problem?";
    case 5:
      return "Why do you like the product?";
    default:
      return "Comment here...";
  }
  
};


const dispatch = useDispatch();

const detail = useSelector((i) => i.details)

// const reviews = useSelector((state)=> state.reviews);     ///mostrar reviews

const [input, setInput] = useState({
    // author: "",
    title: "",
    description:"",
    rating: number,
})

const handleChange = ((e)=>{
    setInput({
        ...input,
        [e.target.name]: e.target.value,
        rating : number,
        title : detail.name
    });
})

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input)
    dispatch(newReview(input));
    setInput({
        // author: "",
        title: "",
        description:"",
        rating: number,
    });
    
};

useEffect(() => {
    dispatch(getDetail(name));
},[]);




console.log(number)

  return (
    <div className='mainContainer'>


    <form onSubmit={(e) => handleSubmit(e)}>
    <div className="all">
      <div className="popup">
        <div className="content">
          <div className='containerProduct'>
              <h5>PRODUCTO</h5>
          </div>
    
    {/* ///////////////////////////////////////////////////////////////////////////////// */}

        <div className='containerRate'>
            <h1>How pleased are you with the product?</h1>
            <div className="textNstars">
                    <div className="stars">
                    
                    {Array(5)
                    .fill()
                    .map((_, index) =>
                        number >= index + 1 || hoverStar >= index + 1 ? (
                        <AiFillStar
                            onMouseOver={() => !number && setHoverStar(index + 1)}
                            onMouseLeave={() => setHoverStar(undefined)}
                            style={{ color: "orange" }}
                            onClick={() => setNumber(index + 1)}
                        />
                        ) : (
                        <AiOutlineStar
                            onMouseOver={() => !number && setHoverStar(index + 1)}
                            onMouseLeave={() => setHoverStar(undefined)}
                            style={{ color: "orange" }}
                            onClick={() => setNumber(index + 1)}
                        />
                        )
                    )}

                    </div>
                    <h4 className="text">{handleText()}</h4>
            </div>
        </div>

    {/* //////////////////////////////////////////////////////////////////////////////// */}



         <div className='containerComment'>
            <h1>Leave a comment</h1>
          <textarea id="description" value={input.description} name= "description" placeholder={handlePlaceHolder()}  onChange={(e) => handleChange(e)}></textarea> 
        </div>

          <div>
          <button type="submit" id="createreview" name= "createreview" value="createreview" >Submit</button>
          </div>

        </div>
      </div>
    </div>
    </form>


    <div className='popuptwo'>

    </div>                
    </div>

  )
};

export default Review
