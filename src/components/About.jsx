import React from 'react'
import { Link } from 'react-router-dom'
import "./style.scss"

function About() {
  return (
    <section id='about' className='about'>
      <div className='container'>
        <h3>Built with Bootstrap 5</h3>
        <p>Grayscale is a free Bootstrap theme created by Start Bootstrap. It can be yours right now, simply download the template <Link target='/' to={"https://startbootstrap.com/theme/grayscale"}>on the preview page.</Link> The theme is open source, and you can use it for any purpose, personal or commercial.</p>
      </div>
      <img src="https://startbootstrap.github.io/startbootstrap-grayscale/assets/img/ipad.png" alt="" />
    </section>
  )
}

export default About