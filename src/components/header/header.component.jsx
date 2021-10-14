import React from 'react'
import { Link } from 'react-router-dom'
import './header.styles.css'

const Header = () => (
  <div className="header">
    <Link to="/">
      <img
        className="logo-container"
        src="https://i.ibb.co/TK6yM5h/logo.png"
        alt=""
      />
    </Link>
    <div className="options">
      <Link className="option" to="/">
        HOME
      </Link>
      <Link className="option" to="/register">
        REGISTER
      </Link>
      <Link className="option" to="/contact">
        CONTACT US
      </Link>
    </div>
  </div>
)

export default Header
