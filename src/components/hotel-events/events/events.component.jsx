import React from 'react'
import './events.styles.css'
import CardItem from '../events-card/event.components'
import Title from '../../title/title.component'
// import { Link } from 'react-router-dom'

function EventCards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <div className="events_section-title">
            <Title title="Hotel Events" />
          </div>
          <ul className="cards__items">
            <CardItem
              src="https://i.ibb.co/RcFsH55/events1.jpg"
              text="Quality in Acea Hotel Subic Resort"
              label="Adventure"
              // path="/services"
            />
            <CardItem
              src="https://i.ibb.co/bNRbj9S/Fresh-watermelon-juice-with-a-straw-in-two-glasses-against-a-bright-tropical-landscape-against-the-b.jpg"
              text="Welcome every time for relax"
              label="Relax"
              // path="/services"
            />
            <CardItem
              src="https://i.ibb.co/Tv6N5cy/Tanning-Beds-Beside-Swimming-Pool-in-Tropical-Resort-in-Maldives.jpg"
              text="Change your view and relax Holidays"
              label="Unwind"
              // path="/services"
            />
          </ul>
          {/* <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              // path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              // path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              // path="/sign-up"
            />
          </ul> */}
        </div>
      </div>
    </div>
  )
}

export default EventCards
