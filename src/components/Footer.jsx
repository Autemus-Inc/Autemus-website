import React from 'react'
import logo from "../assets/bg-logo.svg"
import { FaLocationDot, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6"
import { FaMedium  } from "react-icons/fa"
import { BiLogoInstagramAlt } from "react-icons/bi"
import { BsFillTelephoneOutboundFill } from "react-icons/bs"
import { MdEmail } from "react-icons/md"

const Footer = () => {
  return (
    <footer>
        <div className='footer-links'>
            <div className='social-box'>
                <img src={logo} alt="" className='logo' />
                <div className="socials">
                    <FaSquareXTwitter />
                    <BiLogoInstagramAlt />
                    <FaLinkedin />
                    <FaMedium />
                </div>
            </div>
            <ul>
                <li><a href="">Autemus</a></li>
                <li><a href="">Our Partners</a></li>
                <li><a href="">Reviews</a></li>
            </ul>
            <ul>
            <li><a href="">Services</a></li>
            <li><a href="">Portfolio</a></li>
            <li><a href="">Products</a></li>
            </ul>
            <ul>
            <li><a href="">About Us</a></li>
            <li><a href="">Our Mission</a></li>
            <li><a href="">Our Vision</a></li>
            </ul>
            <div className='contact-box'>
                <p><a href="">Contact</a></p>
                <p><FaLocationDot /> 18, Eric Moore Avenue, Constain, Surulere, Lagos stae. Nigeria</p>
                <p><BsFillTelephoneOutboundFill /> +234 81 2345 6878</p>
                <p><MdEmail /> autemus@outlook.com</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer