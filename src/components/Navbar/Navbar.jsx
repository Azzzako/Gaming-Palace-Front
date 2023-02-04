import React from "react";
import { useState } from "react";
import { TfiAlignJustify } from "react-icons/tfi";
import { FiShoppingCart } from "react-icons/fi"
import { DiRuby } from "react-icons/di"
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css"
import { useSelector } from "react-redux";



const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(false)
    const carrito = ["1", "2", "3", "4", "5"]

    const favourites = useSelector(state=> state.favourites);

    return (
        <nav className="navbarContainer">
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
                          <div className="items"><Link to="/home">Home</Link></div>
                        </div>

                        <div className="menu_item">
                           <div className="items"><Link to="/myprofile">My Profile</Link></div>
                        </div>

                        <div className="menu_item">
                            <div className="items"> <Link to="/myprofile">Settings</Link></div>
                        </div>

                        <div className="menu_item">
                            <div className="items"><Link to="/myprofile">About Us</Link></div>
                        </div>

                        <div className="menu_item">
                            <div className="items">
                            <Link to="/favourites">Favourites</Link>
                            {
                                favourites.length>0 && <span>{favourites.length}</span>
                            }
                            </div>
                        </div>

                        <div className="shopping_cart">
                            <FiShoppingCart />
                            <span className="length_cart"><Link to="/myprofile">{carrito.length}</Link></span>
                        </div>
                    </div>
                </IconContext.Provider>
            </div>
        </nav>
    )
}


export default Navbar
