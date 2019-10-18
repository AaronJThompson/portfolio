import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const NavBar = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ props.items } currentClassName="is-active" offset={-300}>
            {
              props.items.map((item, idx) => {
                return (
                  <li key={item}>
                    <Scroll type="id" element={item}>
                        <a href="#">{props.names[idx]}</a>
                    </Scroll>
                  </li>
                )
              })
            }
        </Scrollspy>
    </nav>
)

export default NavBar
