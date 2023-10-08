import React from 'react'
import logo from "../assets/bg-logo.svg"
import{ NavLink } from "react-router-dom"
import serviceBg from "../assets/service-bg.svg"
import webIcon from "../assets/web.svg"
import mobileIcon from "../assets/mobile.svg"
import devopsIcon from "../assets/devops.svg"
import consultIcon from "../assets/consultation.svg"

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
      <div className="mainContent">
      <section className='product'>
        <h2>Services we offer</h2>
        <div className='process'>
            <div className="service-card">
                <img src={webIcon} alt="" />
                <h4>Web Development</h4>
                <p>Our web development services encompass the creation of stunning, responsive websites and web applications. We leverage cutting-edge technologies and industry best practices to deliver seamless user experiences, ensuring your online presence stands out.</p>
            </div>
            <div className="service-card">
                <img src={mobileIcon} alt="" />
                <h4>Mobile Development</h4>
                <p>In the mobile-first world, Autemus is your trusted partner for creating exceptional mobile applications. We specialize in developing both Android and iOS apps that are not only visually captivating but also highly functional.</p>
            </div>
            <div className="service-card">
                <img src={devopsIcon} alt="" />
                <h4>DevOps & Cloud Development</h4>
                <p>Our DevOps services streamline the entire development process, from code integration and automated testing to continuous deployment. We foster collaboration between development and operations teams, enhancing efficiency, reliability, and the ability to adapt to evolving demands.</p>
            </div>
            <div className="service-card">
                <img src={consultIcon} alt="" />
                <h4>Technical Consultation</h4>
                <p>Our team of seasoned experts provides strategic insights, tailored recommendations, and hands-on expertise across various domains. Whether you're looking to optimize existing systems, implement new technologies, or develop a custom tech strategy, we're here to help you  do that.</p>
            </div>
        </div>
      </section>
     </div>    
    </div>
  )
}

export default Service