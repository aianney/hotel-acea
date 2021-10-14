import React from 'react'
import './room-card.styles.css'
import Card from '../cards/cards.component'
import Title from '../../title/title.component'

// ES7 snippets to do 'rfce'

function RoomCard() {
  return (
    <div className="home-roomcard">
      <Title title="Our Rooms" />
      <div className="home-roomcard__section">
        <Card
          src="https://hotelreservations.ph/testacea/images/rooms/DSVBAR.jpg"
          title="Deluxe Sea View"
          //   description="2 guest · 2 double beds · 34sqm."
          //   price="₱12,000 / night"
        />
        <Card
          src="https://hotelreservations.ph/testacea/images/rooms/SSVBAR.jpg"
          title="Superior Sea view"
          //   description="3 guest · 2 double beds· 28sqm."
          //   price="₱11,500/night"
        />
        <Card
          src="https://hotelreservations.ph/testacea/images/rooms/STDBAR.jpg"
          title="Standard Room"
          //   description="3 guest · 2 double beds· 28sqm."
          //   price="₱10,500 / night"
        />
      </div>
    </div>
  )
}

export default RoomCard
