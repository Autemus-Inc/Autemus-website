import React from 'react'
import logo from "../assets/bg-logo.svg"
import{ NavLink } from "react-router-dom"
import serviceBg from "../assets/service-bg.svg"

const Service = () => {
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
        <img src={serviceBg} alt="" />
      </section>
    </div>
  )
}

export default Service