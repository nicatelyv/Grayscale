import React from 'react'
import './style.scss'

function Contact() {
    return (
        <section className='contact'>
            <div className='cards'>

                <div className='card'>
                    <i class="fa-solid fa-map-location-dot"></i>
                    <h5>ADDRESS</h5>
                    <hr />
                    <p>Azerbaijan / Baku</p>
                </div>

                <div className='card'>
                    <i class="fa-solid fa-envelope"></i>
                    <h5>EMAIL</h5>
                    <hr />
                    <a href="mailto:nicateliyevv03@gmail.com">nicateliyevv03@gmail.com</a>
                </div>

                <div className='card'>
                    <i class="fa-solid fa-mobile-screen-button"></i>
                    <h5>PHONE</h5>
                    <hr />
                    <p>+994705002045</p>
                </div>

            </div>
        </section>
    )
}

export default Contact