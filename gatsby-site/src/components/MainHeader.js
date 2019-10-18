import React from 'react'
import Header from './Header';
import logo from '../assets/images/logo.svg';

const MainHeader = (props) => (
    <Header className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Aaron Thompson</h1>
        <p>Full Stack Web Developer and Software Engineer</p>
    </Header>
)

export default MainHeader
