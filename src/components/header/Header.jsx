import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/3.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Marwan Mohamed</h1>
        <h5 className='text-light'>FrontEnd Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className='me'>
          <img src={process.env.PUBLIC_URL+Me} alt="me"/>
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down </a>
      </div>
    </header>
  )
}

export default Header
