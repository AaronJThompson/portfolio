import React, { useState } from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'
import ScrollToTop from '../components/ScollToTop'
import { Waypoint } from 'react-waypoint'

const NavBar = (props) => {
  const [sticky, setSticky] = useState(false);

  const handleWaypointEnter = () => {
    setSticky(true)
  }
  const handleWaypointLeave = () => {
    setSticky(false)
  }

  return (
    <>
      <ScrollToTop />
      <Waypoint
        onEnter={handleWaypointEnter}
        onLeave={handleWaypointLeave}
      ></Waypoint>
      <nav id="nav" className={sticky ? '' : 'alt'}>
          <Scrollspy items={ props.items } currentClassName="is-active" offset={-300}>
              {
                props.items.map((item, idx) => {
                  return (
                    <li key={item}>
                      <Scroll type="id" element={item} offset={-50}>
                          <a href="#">{props.names[idx]}</a>
                      </Scroll>
                    </li>
                  )
                })
              }
          </Scrollspy>
      </nav>
    </>
  )
}

export default NavBar
