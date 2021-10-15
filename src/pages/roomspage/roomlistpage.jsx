import React from 'react'
import Rooms from '../../components/rooms/roomsList/rooms.component'
import SearchPanel from '../../components/searchpanel/searchpanel.component'
import Stepper from '../../components/stepper/steper.component'
import './roomslistpage.styles.css'

const RoomsPage = () => {
  return (
    <div className="roomspage">
      <h1>Stay period</h1>
      <SearchPanel />
      <Stepper />
      <Rooms />
    </div>
  )
}

export default RoomsPage
