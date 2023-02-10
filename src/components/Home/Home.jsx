import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import icono1 from "../../image/imgCarrusel/logo1.png";
import imagen1 from "../../image/imgCarrusel/imagen1.jpg";
import imagen2 from "../../image/imgCarrusel/imagen2.jpg";
import imagen3 from "../../image/imgCarrusel/imagen3.jpg";
import imagen4 from "../../image/imgCarrusel/imagen4.jpg";
import "./Home.css";
import { getAllProducts } from '../../Redux/Actions/actions';
import ContainerCards from '../Cards/ContainerCards';
import { Searchbar } from '../Searchbar/Searchbar';
// import { log } from 'console';


//impport auth

import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";


export const Home = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

<<<<<<< HEAD



    return (



        <div className="containerGeneral">

            <div className="carousel_1">
                <Carousel variant="dark"
                    className="carousel_indicators"
                    controls={false}
                    indicators={false}
                >
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={imagen3}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Best performance</h3>
                            <p>Products available</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={imagen2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Improve your skills</h3>
                            <p>The best keyboards</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={imagen1}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Play at another level</h3>
                            <p>
                                Buy Razer here!
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
=======
  const dispatch = useDispatch()
  const products = useSelector((state) => state.allProducts)

  useEffect(() => {
    dispatch(getAllProducts())
  },[dispatch])
  
  return (
    <div className=''>
      {/* primer carrusel del home */}
      <div className='containerGeneral'>
>>>>>>> 032af9d77d2b18def0b5f122e75fc57b22e2c061

        <Carousel responsive={responsive} infinite={true} className="imgCarruselContainer">
          <div className="itemHome">
            <img className="imagenStyle" src={imagen1} alt="Image1" />
          </div>
          <div className="itemHome">
            <img className="imagenStyle" src={imagen2} alt="Image2" />
          </div>
          <div className="itemHome">
            <img className="imagenStyle" src={imagen3} alt="Image3" />
          </div>
          <div className="itemHome">
            <img className="imagenStyle" src={imagen4} alt="Image4" />
          </div>
        </Carousel>
      </div>
      

    <div className='container_all'>

      <div className='container_search'>
    <Searchbar/>
      </div>

            </div>

        </div>

    );
}
