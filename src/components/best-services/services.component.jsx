import React, { Component } from 'react'
import { FaShuttleVan } from 'react-icons/fa'
import { MdFreeBreakfast } from 'react-icons/md'
import { RiWifiFill, RiLuggageDepositFill } from 'react-icons/ri'
import Title from '../title/title.component'
import './services.styles.css'
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <MdFreeBreakfast style={{ color: '#033148' }} />,
        title: 'Free Breakfast for two',
        info:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?',
      },
      {
        icon: <FaShuttleVan style={{ color: '#033148' }} />,
        title: 'Parking',
        info:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?',
      },
      {
        icon: <RiLuggageDepositFill style={{ color: '#033148' }} />,
        title: 'Safety Deposit Box',
        info:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?',
      },
      {
        icon: <RiWifiFill style={{ color: '#033148' }} />,
        title: 'Complimentary WIFI access',
        info:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?',
      },
    ],
  }
  render() {
    return (
      <>
        <section className="services">
          <Title title="Best Services" />
          <div className="services-center">
            {this.state.services.map((item) => {
              return (
                <article key={`item-${item.title}`} className="service">
                  <span>{item.icon}</span>
                  <h6>{item.title}</h6>
                  <p>{item.info}</p>
                </article>
              )
            })}
          </div>
        </section>
      </>
    )
  }
}
