import React from 'react'
import './event.styles.css'

function Event({ src, title, description, price }) {
  return (
    <div className="event">
      <img src={src} alt="" />
      <div className="event__info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  )
}

export default Event
