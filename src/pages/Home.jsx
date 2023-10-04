import React from 'react'
import{ NavLink }from "react-router-dom"
import logo from "../assets/bg-logo.svg"
import heroImg from "../assets/heroImg.svg"
import teamImg from "../assets/photo-uvp.svg"
import transafeImg from "../assets/transafe.png"

const Home = () => {
  return (
    <div>
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
    <section className='topBg'>
        <svg width="100%" height="1073" viewBox="0 0 1512 1073" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-6.10352e-05 0H1512V878.444C1512 878.444 991.5 1241.07 497 976.182C2.49985 711.292 -6.10352e-05 878.444 -6.10352e-05 878.444V0Z" fill="#8F7A5D"/>
        </svg>
        <div className='heroContent'>
            <div className='content'>
            <h1>Welcome to Autemus</h1>
            <p>At Autemus Solutions, we are at the forefront of innovation, pushing the boundaries of what's possible in the world of software solutions.</p>
            <NavLink to="/contact" className="contact-btn">Contact</NavLink>
            </div>
            <div className='hero'>
                <img src={heroImg} alt="" />
            </div>
        </div>
    </section>
    <div className='mainContent'>
    <section className='topContent'>
        <div className='brief'>
            <p>Quality Guaranteed</p>
            <h3>Here’s how we are different from Others</h3>
            <p>Our unique strength lies in seamlessly transitioning from ideation to execution. Autemus crafts exceptional software products and serves as a trusted partner in the development process</p>
            <p>We specialize in collaborating with clients to turn ideas into fully functional applications, whether mobile, web, or desktop.</p>
            <p> Our commitment doesn't stop at creation – we provide ongoing support and maintenance, ensuring software solutions remain cutting-edge and efficient over time.</p>
            <NavLink>Get in Touch</NavLink>
        </div>
        <div className='briefImg'>
            <img src={teamImg} alt="" />
        </div>
    </section>
    <section className='product'>
        <h2>Products</h2>
        <div className='product-container'>
            <div className="product-card">
                <img src="https://img.freepik.com/free-vector/mobile-weather-application_1284-4093.jpg?size=626&ext=jpg&ga=GA1.2.1207199826.1690666781&semt=ais" alt="" />
                <h4>Seajro Weather App</h4>
                <p>Coming Soon</p>
            </div>
            <div className="product-card">
                <img src={transafeImg} alt="" />
                <h4>TranSafe E-ticketing App</h4>
                <p>Coming Soon</p>
            </div>
            <div className="product-card">
                <img src="https://img.freepik.com/free-vector/online-medicine-service-landing-page_107791-5138.jpg?size=626&ext=jpg&ga=GA1.1.1207199826.1690666781&semt=ais" alt="" />
                <h4>Inventify App</h4>
                <p>Coming Soon</p>
            </div>    
        </div>
    </section>
    <section>
    <h2>What people are saying about us</h2>
    
    </section>
    </div>
</div>
  )
}

export default Home