import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Contact from './pages/contactpage/contact.component'
import Home from './pages/homepage/home.component'
import Register from './pages/registerpage/register.comonent'
import Header from './components/header/header.component'
import TopHeader from './components/top-header/topheader.component'
import Footer from './components/footer/footer.component'
import RoomsPage from './pages/roomspage/roomlistpage'

function App() {
  return (
    <>
      <TopHeader />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/contact" component={Contact} />
        <Route
          exact
          path="/rooms/:checkInDate/:checkOutDate/:adultCount/:childCount"
          component={RoomsPage}
        />
      </Switch>
      <Footer />
    </>
  )
}

export default App
