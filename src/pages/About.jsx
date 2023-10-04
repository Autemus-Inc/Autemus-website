import React from 'react'
import logo from "../assets/bg-logo.svg"
import{ NavLink }from "react-router-dom"

const About = () => {
  return (
    <div>
       <div className='whiteBg'>
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
    <main>
      
    </main>
    </div>
  )
}

export default About