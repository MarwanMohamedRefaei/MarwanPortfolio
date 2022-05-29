import React from 'react'
import './about.css'
import Me from '../../assets/2.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={process.env.PUBLIC_URL+Me} alt="about-me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Courses</h5>
              <small>56+</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>9+ Completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed at voluptatum, soluta reiciendis optio quidem cupiditate commodi vel perferendis cum similique ipsa error rerum tempore nesciunt inventore quos distinctio doloremque.</p>
          <a href="#contact" className="btn bn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
