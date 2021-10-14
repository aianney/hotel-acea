import React, { Component } from 'react'
import { FaBed } from 'react-icons/fa'
import {
  BsFillPersonPlusFill,
  BsFillCreditCard2FrontFill,
} from 'react-icons/bs'
import './stepper.styles.css'
export default class Stepper extends Component {
  state = {
    steppers: [
      {
        icon: <FaBed style={{ color: '#f9c82e' }} />,
        title: 'Select Rooms',
        info: 'Please select your preferred Rooms',
      },
      {
        icon: <BsFillPersonPlusFill style={{ color: '#f9c82e' }} />,
        title: 'Guest Details',
        info: 'Enter your personal details',
      },
      {
        icon: <BsFillCreditCard2FrontFill style={{ color: '#f9c82e' }} />,
        title: 'Payments',
        info: 'Choose your payment option',
      },
    ],
  }
  render() {
    return (
      <section className="steppers">
        {/* <Title title="steppers" /> */}
        <div className="steppers-center">
          {this.state.steppers.map((item) => {
            return (
              <article key={`item-${item.title}`} className="stepper">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            )
          })}
        </div>
      </section>
    )
  }
}
