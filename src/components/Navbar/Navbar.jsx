import React from "react";
import { useState } from "react";
import { TfiAlignJustify } from "react-icons/tfi";
import { FiShoppingCart } from "react-icons/fi"
import { DiRuby } from "react-icons/di"
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css"

const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(false)
    const carrito = ["1", "2", "3", "4", "5"]
    const carritoLength = carrito.length

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
                            <div className="items"> <Link to="/productform">Settings</Link></div>
                        </div>

                        <div className="menu_item">
                            <div className="items">About Us</div>
                        </div>

                        <div className="shopping_cart">
                            <FiShoppingCart />
                            <span className="length_cart">{carritoLength}</span>
                        </div>
                    </div>
                </IconContext.Provider>
            </div>
        </nav>
    )
}


export default Navbar
