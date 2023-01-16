import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_4.jpg'
import {plans} from '../../data'
import {FaRupeeSign} from 'react-icons/fa'
import './plans.css'
import Card from '../../UI/Card'

const Plans = () => {
  return (
    <>
      <Header title="Member plan" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Consequatur voluptate 
        vero qui culpa iure magni assumenda.
      </Header>

      <section className='plans'>
        <div className="container plans__container">
          {
            plans.map(({id, name, desc, price, features}) => {
              return(
                <Card key={id} className='plan'>
                  <h3>{name}</h3>
                  <small>{desc}</small>
                  <h2><FaRupeeSign/>{`${price}`}</h2><h3>/mo</h3>
                  <h4>Features</h4>
                  {
                    features.map(({feature, available}, index) => {
                      return (
                        <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>
                      )
                    })
                  }
                  <button className="btn lg">Choose Plan</button>
                </Card>
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Plans
