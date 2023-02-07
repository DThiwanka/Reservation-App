import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" style={{color:"inherit",textDecoration:"none"}}>
                </Link>
                <span className="logo">
                    Booking
                </span>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    )
}

export default NavBar
