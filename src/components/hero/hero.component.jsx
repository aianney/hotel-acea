import React from 'react'
import './hero.styles.css'

const Hero = ({ children, hero }) => {
  return <div className={hero}>{children}</div>
}

export default Hero
