import React from 'react'
import{Link} from 'react-router-dom'
import Logo from '../images/logo.png'
import {FaLinkedin, FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
         <article>
            <Link className='logo'>
               <img src={Logo} alt="Footer logo" />
            </Link>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores odit officiis ipsam commodi, maxime dolor error aliquam esse libero amet.
            </p>
            <div className="footer__socials">
               <a href="https://linkedin.com/" target="_blank" rel='noreferrer noopener'><FaLinkedin/></a>
               <a href="https://facebook.com/" target="_blank" rel='noreferrer noopener'><FaFacebookF/></a>
               <a href="https://twitter.com/" target="_blank" rel='noreferrer noopener'><AiOutlineTwitter/></a>
               <a href="https://instagram.com/" target="_blank" rel='noreferrer noopener'><AiOutlineInstagram/></a>
            </div>
         </article>
         <article>
            <h4>Permalinks</h4>
            <Link to='/about'>About</Link>
            <Link to='/Plans'>Plans</Link>
            <Link to='/trainers'>Trainers</Link>
            <Link to='/gallery'>Gallery</Link>
            <Link to='/contact'>Contact</Link>
         </article>
         <article>
            <h4>Insights</h4>
            <Link to='/s'>Blog</Link>
            <Link to='/s'>Case Studies</Link>
            <Link to='/s'>Events</Link>
            <Link to='/s'>Communities</Link>
            <Link to='/s'>FAQs</Link>
         </article>
         <article>
            <h4>Get in Touch</h4>
            <Link to='/contact'>Contact Us</Link>
            <Link to='/s'>Support</Link>
         </article>
      </div>
      <div className="footer__copyright">
         <small> 2023 Jayanta Gym Wesbsite &copy; All Right Reserved</small>
      </div>
    </footer>
  )
}

export default Footer
