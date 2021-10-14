import React from 'react'
import Register from '../../components/register/register.component'
import Stepper from '../../components/stepper/steper.component.jsx'
import './registerpage.styles.css'

const RegisterPage = () => {
  return (
    <div className="stepper-registration">
      <Stepper />
      <Register />
    </div>
  )
}

export default RegisterPage
