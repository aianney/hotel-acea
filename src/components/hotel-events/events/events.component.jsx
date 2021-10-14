import React from 'react'
import './events.styles.css'
import Event from '../events-card/event.components'
import Title from '../../title/title.component'

// ES7 snippets to do 'rfce'

function EventCards() {
  return (
    <div className="home-events">
      <Title title="Hotel Events" />
      <div className="event__section">
        <Event
          src="https://i.ibb.co/QY5KxdG/events.jpg"
          title="Quality of Hotel Acea"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          //   price="₱12,000 / night"
        />
        <Event
          src="https://i.ibb.co/fH70Ljp/events1.jpg"
          title="Welcome every time for relax"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla eu convallis tortor. Suspendisse potenti. In faucibus massaarcu, vitae cursus mi hendrerit nec"
          //   price="₱11,500/night"
        />
        <Event
          src="https://i.ibb.co/7zwX42Q/Group-of-friends-having-a-summer-dinner-party-on-the-patio.jpg"
          title="Change your view & relax Holidays"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
          //   price="₱10,500 / night"
        />
      </div>
    </div>
  )
}

export default EventCards
