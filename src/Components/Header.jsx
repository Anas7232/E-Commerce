import React from 'react'
import Nav from './Nav/Nav';
import image from '../images/organic-pattern-1.png'

function Header() {
    return (
        <div className="main">
            <Nav />
            <div className="m-text">
                <img src={image} alt="Images" className="header-image" />
                <h2> Eat <font> Clean </font> And <font> Green </font>. Eat Organic </h2>
                <a className="m-btn" href=""> Products </a>
            </div>
        </div>
    )
}

export default Header
