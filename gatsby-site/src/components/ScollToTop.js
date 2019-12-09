import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint'
import Scroll from './Scroll'

const ScrollToTop = (props) => {
  const [visible, setVisible] = useState(false);

  const handleWaypointEnter = () => {
    setVisible(true)
  }
  const handleWaypointLeave = () => {
    setVisible(false)
  }
  return (
    <>
      <Waypoint
        onEnter={handleWaypointEnter}
        onLeave={handleWaypointLeave}
      ></Waypoint>
      <Scroll type="id" element="header">
        <a href="#" className={`button scroll-top${visible ? "" : " visible"}`}>Scroll to top</a>
      </Scroll>
    </>
  )
}

export default ScrollToTop;