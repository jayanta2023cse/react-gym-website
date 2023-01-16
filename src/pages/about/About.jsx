import React from 'react'
import HeaderImage from '../../images/header_bg_1.jpg'
import Header from '../../components/Header'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'

const About = () => {
  return (
    <>
      <Header image={HeaderImage} title="About Us" >Lorem ipsum, dolor sit amet consectetur 
      adipisicing elit. Dolores, doloremque officia? Quisquam, veniam.</Header>

      <section className='about__story'>
         <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="About Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit, amet consectetur 
              adipisicing elit. Laborum tempora, modi eaque eligendi mollitia
              repellendus ipsum magni minima qui nesciunt?
            </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
              magnam harum perferendis vel repellendus quis quos!
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Accusamus ducimus repellat incidunt!
            </p>
          </div>
         </div>
      </section>

      <section className='about__vision'>
         <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit, amet consectetur 
              adipisicing elit. Laborum tempora, modi eaque eligendi mollitia
              repellendus ipsum magni minima qui nesciunt?
            </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
              magnam harum perferendis vel repellendus quis quos!
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="About Vision Image" />
          </div>
         </div>
      </section>

      <section className='about__mission'>
         <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="About Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit, amet consectetur 
              adipisicing elit. Laborum tempora, modi eaque eligendi mollitia
              repellendus ipsum magni minima qui nesciunt?
            </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
              magnam harum perferendis vel repellendus quis quos!
            </p>
          </div>
         </div>
      </section>
    </>
  )
}

export default About
