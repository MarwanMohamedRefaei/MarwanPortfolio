import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Food Recipe App',
    github: 'https://marwanmohamedrefaei.github.io/FoodApp/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Movies App',
    github: 'https://marwanmohamedrefaei.github.io/MoviesApp/',
  }

]


const Portifolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
         data.map(({id,image,title,github,demo})=>{
           return(
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={process.env.PUBLIC_URL+image} alt="" />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} target="_blank" className='btn ' rel="noopener noreferrer"  >Github</a>
            </div>
          </article>
           )
         })
       }
        

      </div>
    </section >
  )
}

export default Portifolio
