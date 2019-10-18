import React from 'react'

const Header = (props) => (
    <header id="header" className={props.className}>
        {props.children}
    </header>
)

export default Header
