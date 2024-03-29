import React from 'react'
import './services.css'
// import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Did Last Years</h5>
      <h2>My Experience</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h1>Experience</h1>
          </div>

          <ul className="service__list">
            <li>
              {/* <BiCheck className='service__list-icon' /> */}
              <h1>Software Engineer</h1>
              <h2>Egyptian Air Force, Cairo | April2020 - August 2022</h2>
              <p>Worked on many projects with a huge database using SQL
                server and MongoDB, so i gained a huge experience in data
                manipulating using queries and procedures.Creating
                professional projects using( javascript-JQuery-PHP-SQL
                server) or (React/Redux - Node - Express - MongoDB) with (
                Bootstrap - tailwind ) for a responsive and good looking
                applications. Gaining a great experience in (authentication -
                Authorization- JsonWebTokens - local storage - cookies)</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )

}

export default Services
