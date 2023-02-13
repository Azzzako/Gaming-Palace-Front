import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import { BsCartFill, BsHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addFav, deleteFavs } from "../../Redux/Actions/actions.js";

const Card = ({ image, price, name, description, id }) => {
  const favourites = useSelector((state) => state.favourites);
  const disptach = useDispatch();
  const existFavs = favourites.map((fav) => fav.id);

  const handleFav = (id) => {
    !existFavs.includes(id) ? disptach(addFav(id)) : disptach(deleteFavs(id));
  };

  return (
    <div className="cards">
      <div className="img-icons">
        <Link to={`/detail/${id}`}>
          <img src={image} alt="*" width="150px" height="100px" />
        </Link>

        <div className="icons">
          {existFavs.includes(id) ? (
            <BsHeartFill
              color="red"
              className="icons-fav"
              onClick={() => {
                handleFav(id);
              }}
            />
          ) : (
            <BsHeartFill
              className="icons-fav"
              onClick={() => {
                handleFav(id);
              }}
            />
          )}
        </div>

        <Link to="/myprofile">
          <div className="icons">
            <BsCartFill className="icons-cart" />
          </div>
        </Link>
      </div>

      <h3>{name}</h3>

      <h3>US$ {price}</h3>

      {/* <h3>{description}</h3> */}
    </div>
  );
};

export default Card;
