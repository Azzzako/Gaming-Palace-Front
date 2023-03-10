import React from "react";
import { useState } from "react";
import { TfiAlignJustify } from "react-icons/tfi";
import { FiShoppingCart } from "react-icons/fi"
import { DiRuby } from "react-icons/di"
import { IconContext } from "react-icons/lib";
import { Link, useLocation } from "react-router-dom";
import "../Navbar/Navbar.css"
import { useSelector } from "react-redux";
import { TfiHeart } from "react-icons/tfi";
import { MdAccountCircle } from "react-icons/md";



const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(false)
    const shopCart = useSelector(state => state.shopCart)

    const favourites = useSelector(state => state.favourites);

    const location = useLocation();

    const linkStyle = {
        "text-decoration": "none",
        "color": "#fff"
    };

    return (
        <nav className="navbarContainer">
            {
                location.pathname !== "/" &&

                <div className="wrapper">

                    <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
                        <div className="logo_container">
                            <DiRuby />
                            <p>
                                Gaming Palace
                            </p>
                        </div>

                        <div className="mobile_icon"
                            onClick={() => setShowNavbar(!showNavbar)}
                        >
                            <TfiAlignJustify />
                        </div>

                        <div className="menu" style={showNavbar ? { left: "0" } : { left: "-100%" }}
                            onClick={() => setShowNavbar(!showNavbar)}
                        >
                            <div className="menu_item">
                                <Link to="/home" style={linkStyle}> <div className="items">Home</div></Link>
                            </div>

                            <div className="menu_item">
                                <Link to="/products" style={linkStyle}><div className="items">Products</div></Link>
                            </div>

                            <div className="menu_item">
                                <Link to="/productform" style={linkStyle}><div className="items">Create Product</div></Link>
                            </div>

                            <div className="container_icons">

                                <div className="shopping_cart">
                                    <Link to="/favourites" style={linkStyle}><div className="">
                                        <TfiHeart />
                                        
                                           <span className="length_cart">{favourites.length}</span>
                                        
                                    </div></Link>
                                </div>

                                 <div className="shopping_cart">
                                <Link to="/shopcart" style={linkStyle}><FiShoppingCart /></Link>
                                <span className="length_cart">{shopCart.length}</span>
                            </div>

                                <div className="shopping_cart">
                                    <Link to="/dashboard" style={linkStyle}><MdAccountCircle /></Link>
                                </div>
                            </div>



                        </div>
                    </IconContext.Provider>
                </div>
            }
        </nav>
    )
}


export default Navbar
