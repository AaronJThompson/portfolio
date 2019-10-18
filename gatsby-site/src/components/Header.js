import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Aaron Thompson</h1>
        <p>Full Stack Web Developer and Software Engineer</p>
    </header>
)

export default Header
