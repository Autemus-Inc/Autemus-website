import React from 'react'
import{ NavLink }from "react-router-dom"
import logo from "../assets/bg-logo.svg"
import { RxHamburgerMenu } from "react-icons/rx"
import { useState } from 'react'

const Header = () => {
  return (
    // <div className='whiteBg'>
    <header>
        <img src={logo} alt="" className='logo'/>
        {/* <RxHamburgerMenu onClick={showNav}/> */}
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/service">Service</NavLink>
            <NavLink to="/contact" className="contact-btn">Contact</NavLink>
        </nav>
    </header>
    // </div>
  )
}

export default Header