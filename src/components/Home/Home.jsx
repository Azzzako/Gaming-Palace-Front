import imagen1 from "../../image/imgCarrusel/razer-productos.png";
import imagen2 from "../../image/imgCarrusel/EVGA-1.png";
import imagen3 from "../../image/imgCarrusel/TRITON-WHITE-03-1.png";
import logitech from "../../image/imgCarrusel/pngegg.png"
import nvidia from "../../image/imgCarrusel/nvidia.png"
import asus from "../../image/imgCarrusel/asus.png"
import razer from "../../image/imgCarrusel/razer.png"
import hyper from "../../image/imgCarrusel/hyper.png"
import Carousel from 'react-bootstrap/Carousel';
import "./Home.css"
import React, { useEffect } from "react";
import { ConfirmData } from "../ConfirmData/ConfirmData";
import { postByMail } from "../../Redux/Actions/actions";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";

export const Home = () => {

    const dispatch = useDispatch()
    const { user } = useAuth0()

    useEffect(() => {
        dispatch(postByMail(user?.email))
    })

    return (

        <div className="containerGeneral">

            <ConfirmData />

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

            <div className="carousel2_container">
                <div className="text_car">
                    <h1 className="text_carousel2">Brands</h1>
                </div>
                <div className="carousel_2">
                    <Carousel variant="dark"
                        controls={false}
                        indicators={false}
                        interval={1000}
                    >
                        <Carousel.Item>
                            <img
                                className="d-block2 w-100"
                                src={logitech}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block2 w-100 Second_slide"
                                src={asus}
                                alt="Second_slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block2 w-100"
                                src={razer}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block2 w-100"
                                src={nvidia}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block2 w-100"
                                src={hyper}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>

            </div>

        </div>

    );
}
