import React from 'react'
import logo from "../assets/bg-logo.svg"
import{ NavLink }from "react-router-dom"
import contactBg from "../assets/contact-bg.svg"

const Contact = () => {
  return (
    <div>
       <div className='whiteBg'>
    <header>
        <img src={logo} alt="" className='logo'/>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/service">Service</NavLink>
            <NavLink to="/contact" className="contact-btn">Contact</NavLink>
        </nav>
    </header>
    </div>
    <section className='pagebackground'>
        <img src={contactBg} alt="" />
      </section>
    </div>
  )
}

export default Contact