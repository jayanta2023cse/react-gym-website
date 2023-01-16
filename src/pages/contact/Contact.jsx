import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import { MdEmail } from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import './contact.css'

const Contact = () => {
  return (
    <>
      <Header title="Get In touch" image={HeaderImage}> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Voluptas atque provident deserunt delectus illum.
      </Header>

      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:gjayanta570@gmail.com" target='_blank' rel='noreferrer noopener'><MdEmail/></a>
            <a href="https://m.me/ernest_achiever" target='_blank' rel='noreferrer noopener'><BsMessenger/></a>
            <a href="https://wa.me/+918967898882" target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>
          </div>
        </div>

      </section>
    </>
  )
}

export default Contact
