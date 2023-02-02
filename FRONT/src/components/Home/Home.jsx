import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Row, Col } from "react-bootstrap";
import icono1 from "../../image/imgCarrusel/logo1.png";
import imagen1 from "../../image/imgCarrusel/imagen1.jpg";
import imagen2 from "../../image/imgCarrusel/imagen2.jpg";
import imagen3 from "../../image/imgCarrusel/imagen3.jpg";
import imagen4 from "../../image/imgCarrusel/imagen4.jpg";
import ContainerCards from '../Cards/ContainerCards'

import "./Home.css";
import Navbar from '../Navbar/Navbar';
import { getProducts } from '../../Redux/Actions/actions';
import { products } from '../../loadDB';
const Home = () => {

// const allProducts = products.slice(0, 10)

const allProducts = useSelector(state => state.allProducts)

const dispatch = useDispatch()

useEffect(()=>{
  dispatch(getProducts())
},[])






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
  return (
    <div className=''>
      {/* primer carrusel del home */}
      <div className='containerGeneral'>
        
        <Carousel responsive={responsive} infinite={true} className="imgCarruselContainer">
          <div className="item">
            <img className="imagenStyle" src={imagen1} alt="Image" />
          </div>
          <div className="item">
            <img className="imagenStyle" src={imagen2} alt="Image" />
          </div>
          <div className="item">
            <img className="imagenStyle" src={imagen3} alt="Image" />
          </div>
          <div className="item">
            <img className="imagenStyle" src={imagen4} alt="Image" />
          </div>
        </Carousel>
      </div>
      {/* carrusel logos  */}
      <div className='containerLogoCarusell'>
        <div className='contenedorCarrusel2'>
          <Carousel responsive={responsive} infinite={true} className="imgCarruselContainer2">
            <div className="item2">
              <img className="itemImage" src={imagen1} alt="Image" />
            </div>
            <div className="item2">
              <img className="itemImage" src={imagen2} alt="Image" />
            </div>
            <div className="item2">
              <img className="itemImage" src={imagen3} alt="Image" />
            </div>
            <div className="item2">
              <img className="itemImage" src={imagen4} alt="Image" />
            </div>
          </Carousel>
          
          

        </div>
      </div>
      <h1 className='d-flex align-items-center justify-content-center mt-4 blockquote'>Elige tu notebook ideal para trabajar o jugar !</h1>
      {/* contenedor de carrusel 3 */}
      <div className='containerMaster2 justify-content-center align-items-center'>
        <div className='containerCarrusel border rounded p-4 bg-secondary'>
          <Carousel responsive={responsive} infinite={true} className="">
            <img className="imageCarrusel" src={icono1} alt="Img" />
            <div className="mb-auto mt-auto divImg">
              <img className="itemImage3 m-2 rounded height-8 " src={imagen1} alt="Image" />
            </div>
            <div className="mb-auto mt-auto divImg">
              <img className="itemImage3 m-2 rounded height-8" src={imagen2} alt="Image" />
            </div>
            <div className="mb-auto mt-auto divImg">
              <img className="itemImage3 m-2 rounded height-8" src={imagen3} alt="Image" />
            </div>
            <div className="mb-auto mt-auto divImg">
              <img className="itemImage3 m-2 rounded height-8" src={imagen4} alt="Image" />
            </div>
          </Carousel>
        </div>
      </div>
      <div>
        <h1 className='d-flex align-items-center justify-content-center mt-4 blockquote'>Elige tu notebook ideal para trabajar o jugar !</h1>
        {/* contenedor de carrusel 3 */}
        <div className='containerMaster2 justify-content-center align-items-center'>
          <div className='containerCarrusel border rounded p-4 bg-secondary'>
            <Carousel responsive={responsive} infinite={true} className="">
              <div className="mb-auto mt-auto divImg">
                <img className="itemImage3 m-2 rounded height-8 " src={imagen1} alt="Image" />
              </div>
              <div className="mb-auto mt-auto divImg">
                <img className="itemImage3 m-2 rounded height-8" src={imagen2} alt="Image" />
              </div>
              <div className="mb-auto mt-auto divImg">
                <img className="itemImage3 m-2 rounded height-8" src={imagen3} alt="Image" />
              </div>
              <div className="mb-auto mt-auto divImg">
                <img className="itemImage3 m-2 rounded height-8" src={imagen4} alt="Image" />
              </div>
            </Carousel>
            <div className='containerImg'>
              <img className="imageCarrusel2" src={icono1} alt="Img" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <ContainerCards products={allProducts}/>
      </div>
    </div>
  )
}

export default Home;
