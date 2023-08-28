import React from 'react'
import './style.scss'

function Signup() {
    return (
        <section id='signup' className='signup'>
            <i class="fa-regular fa-paper-plane"></i>
            <h2>Subscribe to receive updates!</h2>
            <div>
                <input type="text" placeholder='ENTER EMAIL ADDRESS...' />
                <button>NOTIFY ME</button>
            </div>
        </section>
    )
}

export default Signup