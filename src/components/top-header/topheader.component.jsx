import React from 'react'
import { AiFillPhone } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
import LanguageIcon from '@material-ui/icons/Language'
import './topheader.styles.css'

const TopHeader = () => {
  return (
    <div className="top_bar">
      <div className="top_bar__icons">
        <div className="phone">
          <LanguageIcon style={{ marginRight: 20, marginBottom: -7 }} />
          <AiFillPhone
            size={30}
            color={'white'}
            style={{ marginBottom: -10 }}
          />
          +45 345 3324 56789
        </div>
        <div className="email">
          <HiOutlineMail
            size={30}
            color={'white'}
            style={{ marginBottom: -10 }}
          />
          reservations@acea.ph
        </div>
      </div>
    </div>
  )
}

export default TopHeader
