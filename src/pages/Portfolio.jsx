import React from 'react'
import logo from "../assets/bg-logo.svg"
import{ NavLink }from "react-router-dom"
import portfolioBg from "../assets/portfolio-bg.svg"

const Portfolio = () => {
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
        <img src={portfolioBg} alt="" />
      </section>
      <section className='mainContent'>
        <h2>Our Product</h2>
        <div className="product">
            <div className="process">
                <div className="card">
                <img src="https://img.freepik.com/free-vector/mobile-weather-application_1284-4093.jpg?size=626&ext=jpg&ga=GA1.2.1207199826.1690666781&semt=ais" alt="" />
                <div>
                    <h4>Seajro Weather App</h4>
                    <p>Coming Soon</p>
                    <p>Seajro is your reliable companion for all things weather-related. With a sleek and intuitive interface, Seajro provides real-time weather updates, forecasts, and essential meteorological data at your fingertips. Whether you're planning a weekend getaway, checking daily conditions, or staying safe during extreme weather events, Seajro keeps you informed with accuracy and precision.</p>
                </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio