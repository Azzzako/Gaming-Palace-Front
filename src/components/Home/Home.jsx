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


const Home = () => {
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

  const dispatch = useDispatch()
  const products = useSelector((state) => state.allProducts)

  useEffect(() => {
    dispatch(getAllProducts())
  },[dispatch])
  
  console.log(products)

  return (
    <div className=''>
      {/* primer carrusel del home */}
      <div className='containerGeneral'>

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
      
      <ContainerCards 
      products={products}/>
    </div>
  )
}

export default Home
