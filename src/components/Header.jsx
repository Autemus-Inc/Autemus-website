import React from 'react'
import{ NavLink }from "react-router-dom"
import logo from "../assets/bg-logo.svg"

const Header = () => {
  return (
    <div className='top-header'>
    <header>
        <img src={logo} alt="" className='logo'/>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="">Portfolio</NavLink>
            <NavLink to="">Service</NavLink>
            <NavLink to="" className="contact-btn">Contact</NavLink>
        </nav>
    </header>
    </div>
  )
}

export default Header