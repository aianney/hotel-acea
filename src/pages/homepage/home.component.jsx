import React from 'react'
import Hero from '../../components/hero/hero.component'
import Banner from '../../components/banner/banner.component'
import { Link } from 'react-router-dom'
import './homepage.styles.css'
import Stepper from '../../components/stepper/steper.component'
import Services from '../../components/best-services/services.component'
import EventCards from '../../components/hotel-events/events/events.component'
import RoomCard from '../../components/room-cards/roomcard/room-card.component'
import SearchPanelHome from '../../components/searchpanel/searchpanel.component'

const Home = () => {
  return (
    <div>
      <Hero hero="defaultHero">
        <Banner
          title="Welcome to Acea Beach Resort"
          subtitle="San Bernardino Road, Subic Bay Freeport Zone"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
          <Link to="/register" className="btn-primary-register">
            register
          </Link>
        </Banner>
      </Hero>
      <SearchPanelHome />
      <Stepper />
      <RoomCard />
      <Services />
      <EventCards />
    </div>
  )
}

export default Home
