import React from 'react'
import logo from "../assets/bg-logo.svg"
import{ NavLink }from "react-router-dom"
import aboutBg from "../assets/about-bg.svg"
import missionImg from "../assets/mission.svg"
import icon1 from "../assets/adaptability.svg"
import icon2 from "../assets/learning.svg"
import icon3 from "../assets/ethical.svg"
import icon4 from "../assets/customer.svg"
import icon5 from "../assets/collaboration.svg"
import icon6 from "../assets/diversity.svg"
import discoverIcon from "../assets/discover.svg"
import designIcon from "../assets/design.svg"
import developmentIcon from "../assets/development.svg"
import deployIcon from "../assets/deploy.svg"
import { RxHamburgerMenu } from "react-icons/rx"
import { useState } from 'react'

const About = () => {
  // const [showMenu, setShowMenu] = useState(false)

  // function showNav() {
  //   setShowMenu(true)
  // }

  return (
    <div>
       <div className='whiteBg'>
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
    </div>
    <main>
      <section className='pagebackground'>
        <img src={aboutBg} alt="" />
      </section>
      <div className="mainContent">
      <section className='topContent'>
        <div className='brief'>
            <h3>Our Mission</h3>
            <p>At Autemus, our unwavering mission is to empower individuals, small-scale enterprises, and large businesses alike with groundbreaking technological solutions that drive efficiency, stimulate growth, and create meaningful impact.</p>
            <p>We are committed to pushing the boundaries of what's possible by delivering cutting-edge products and services that redefine industry standards and ignite progress.</p>
            <p>Our core values reflect our dedication to inclusivity, adaptability, collaboration, ethics, excellence, and customer-centricity. We believe that technology should be accessible to all, regardless of education or financial resources.</p>
            <p>Our focus on providing solutions to rural and underserved areas underscores our commitment to this principle.</p>
        </div>
        <div className='briefImg'>
            <img src={missionImg} alt="" />
        </div>
    </section>
    <section className='product'>
      <h2>Our Core Values</h2>
      <div className='product-container'>
      <div className="value-card">
        <img src={icon1} alt="" />
        <h5>Adaptability</h5>
      </div>
      <div className="value-card">
        <img src={icon2} alt="" />
        <h5>Learning & Growth</h5>
      </div>
      <div className="value-card">
        <img src={icon3} alt="" />
        <h5>Ethical Integrity</h5>
      </div>
      <div className="value-card">
        <img src={icon4} alt="" />
        <h5>Customer Centric</h5>
      </div>
      <div className="value-card">
        <img src={icon5} alt="" />
        <h5>Collaboration</h5>
      </div>
      <div className="value-card">
        <img src={icon6} alt="" />
        <h5>Diversity</h5>
      </div>
      </div>
    </section>
    <section className='product'>
      <h2>Our Team</h2>
      <div className='product-container'>

      </div>
    </section>
    <section className='product'>
      <h2>Our Process</h2>
      <p className='processText'>At Autemus, we are committed to guiding you through every stage of the software lifecycle, from concept to deployment, to ensure your software solution stands out in the competitive landscape.</p>
      <div className="process">
        <div className='process-card'>
          <img src={discoverIcon} alt="" />
          <h4>Discover</h4>
          <p>At Autemus, our software journey always begins with a thorough discovery phase. This initial step is all about understanding your unique needs, goals, and challenges. Our dedicated team conducts in-depth research, market analysis, and user feedback assessments to shape a clear vision for your software solution.</p>
        </div>
        <div className='process-card'>
          <img src={designIcon} alt="" />
          <h4>Design</h4>
          <p>Designing exceptional user experiences is at the core of what we do at Autemus. Our talented designers work closely with you to create intuitive and visually captivating interfaces. We focus on usercentric design, ensuring that your software not only looks great but also provides a seamless and delightful user journey.</p>
        </div>
        <div className='process-card'>
          <img src={developmentIcon} alt="" />
          <h4>Development</h4>
          <p>At Autemus, our software development process is meticulously crafted to transform your ideas into robust, cutting-edge solutions. Our team of skilled developers leverages the latest technologies and best practices to bring your vision to life, ensuring scalability, security, and efficiency every step of the way.</p>
        </div>
        <div className='process-card'>
          <img src={deployIcon} alt="" />
          <h4>Deploy</h4>
          <p>Once your software is developed and rigorously tested, we take pride in a seamless deployment process. We handles all the technical intricacies, from setting up infrastructure to ensuring a smooth transition to production. We provide ongoing support to keep your software running efficiently and adapt it to evolving needs.</p>
        </div>
      </div>
    </section>
    </div>
    </main>
    </div>
  )
}

export default About