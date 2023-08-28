import React, { useState } from 'react'
import "./style.scss"

function Navbar() {

    const [mobilNav, setMobilNav] = useState(false)
    function mobilnav() {
        setMobilNav(!mobilNav)
    }

    const [navbar, setNavbar] = useState()
    const scrollNav = () => {
        if (window.scrollY >= 50) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', scrollNav)

    return (
        <nav className={navbar ? 'nav nav-bg' : 'nav'}>
            <div className='navMain'>
                <a href="#header"><h2>Start Bootsrap</h2></a>
                <ul>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#signup'>Contact</a></li>
                </ul>
                <div className='mobilButton' onClick={mobilnav}>
                    <p>Menu</p>
                    <i class="fa-solid fa-bars" style={{ color: "#64A19D" }}></i>
                </div>
            </div>
            {
                mobilNav &&
                <div className='mobilContent'>
                    <ul>
                        <li><a href='#about'>About</a></li>
                        <li><a href='#projects'>Projects</a></li>
                        <li><a href='#signup'>Contact</a></li>
                    </ul>
                </div>
            }
        </nav>
    )
}

export default Navbar