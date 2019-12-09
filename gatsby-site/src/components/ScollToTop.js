import React, { useState } from 'react'
import Scroll from './Scroll'

const ScrollToTop = (props) => {
  return (
    <Scroll type="id" element="header">
      <a href="#" className="button scroll-top">Scroll to top</a>
    </Scroll>
  )
}

export default ScrollToTop;