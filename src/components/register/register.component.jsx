import React from 'react'
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core'
import ReCAPTCHA from 'react-google-recaptcha'
import './register.styles.css'

function Register() {
  // handleChange = (value) => {
  //     console.log("Captcha value:", value);
  //   }
  const [userCredentials, setUserCredentials] = React.useState({
    firstName: '',
    lastName: '',
    number: '',
    country: '',
    email: '',
    homeAddress: '',
    cityOfResidence: '',
    date: '',
    message: '',
  })
  const [submitted, setSubmitted] = React.useState(false)
  const [valid, setIsValid] = React.useState(false)

  const handleFirstNameInputChange = (event) => {
    setUserCredentials({ ...userCredentials, firstName: event.target.value })
  }
  const handleLastNameInputChange = (event) => {
    setUserCredentials({ ...userCredentials, lastName: event.target.value })
  }
  const handleLNumberInputChange = (event) => {
    setUserCredentials({ ...userCredentials, number: event.target.value })
  }
  const handleCountryInputChange = (event) => {
    setUserCredentials({ ...userCredentials, country: event.target.value })
  }
  const handleEmailInputChange = (event) => {
    setUserCredentials({ ...userCredentials, email: event.target.value })
  }
  const handleHomeAddressInputChange = (event) => {
    setUserCredentials({ ...userCredentials, homeAddress: event.target.value })
  }
  const handleCityOfResidenceInputChange = (event) => {
    setUserCredentials({
      ...userCredentials,
      cityOfResidence: event.target.value,
    })
  }
  const handleDateInputChange = (event) => {
    setUserCredentials({ ...userCredentials, date: event.target.value })
  }
  const handleLMessageInputChange = (event) => {
    setUserCredentials({ ...userCredentials, message: event.target.value })
  }

  // const handleChange = (event) => {
  //   const { userCredentials, value } = event.target

  //   setUserCredentials({ ...userCredentials, [userCredentials]: value })
  // }
  const handleSubmit = (event) => {
    event.preventDefault()
    if (
      userCredentials.firstName &&
      userCredentials.lastName &&
      userCredentials.number &&
      userCredentials.country &&
      userCredentials.email &&
      userCredentials.homeAddress &&
      userCredentials.cityOfResidence &&
      userCredentials.date &&
      userCredentials.message
    ) {
      setIsValid(true)
    }
    setSubmitted(true)
  }

  return (
    <div className="register">
      <Typography gutterBottom variant="h3" align="center"></Typography>
      <Grid>
        <Card style={{ width: 'calc(97% + 8px)', paddingLeft: '25' }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Register
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              Fill up the form and our team will get back to you within 24
              hours.
            </Typography>
            <form onSubmit={handleSubmit}>
              {submitted && valid ? (
                <div className="success-message">
                  Success! Thank you for registering
                </div>
              ) : null}
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    type="first name"
                    name="first name"
                    value={userCredentials.firstName}
                    onChange={handleFirstNameInputChange}
                    placeholder="Enter first name"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                  {submitted && !userCredentials.firstName ? (
                    <span>Please enter a first name</span>
                  ) : null}
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    type="last name"
                    name="last name"
                    value={userCredentials.lastName}
                    onChange={handleLastNameInputChange}
                    placeholder="Enter last name"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                  {submitted && !userCredentials.lastName ? (
                    <span>Please enter a last name</span>
                  ) : null}
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    name="number"
                    value={userCredentials.number}
                    onChange={handleLNumberInputChange}
                    placeholder="Enter phone number"
                    label="Phone"
                    variant="outlined"
                    fullWidth
                    required
                  />
                  {submitted && !userCredentials.number ? (
                    <span>Please enter your number</span>
                  ) : null}
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    type="text"
                    name="country"
                    value={userCredentials.country}
                    onChange={handleCountryInputChange}
                    placeholder="Country"
                    label="Country"
                    variant="outlined"
                    fullWidth
                    required
                  />
                  {submitted && !userCredentials.country ? (
                    <span>Please enter a country</span>
                  ) : null}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="email"
                    name="email"
                    value={userCredentials.email}
                    onChange={handleEmailInputChange}
                    placeholder="Enter email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                  />
                  {submitted && !userCredentials.email ? (
                    <span>Please enter a valid email</span>
                  ) : null}
                </Grid>
                <Grid item xs={12}>
                  <div className="birthday">Birthday</div>
                  <TextField
                    type="date"
                    name="date"
                    value={userCredentials.date}
                    onChange={handleDateInputChange}
                    // placeholder="Birthday"
                    // label="Birthday"
                    variant="outlined"
                    fullWidth
                    required
                  />
                  {submitted && !userCredentials.date ? (
                    <span>Please enter your birthday</span>
                  ) : null}
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    type="text"
                    name="home address"
                    value={userCredentials.homeAddress}
                    onChange={handleHomeAddressInputChange}
                    placeholder="Home Address"
                    label="Home Address"
                    variant="outlined"
                    fullWidth
                    required
                  />
                  {submitted && !userCredentials.homeAddress ? (
                    <span>Please enter a home address</span>
                  ) : null}
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    type="text"
                    name="city of residence"
                    value={userCredentials.cityOfResidence}
                    onChange={handleCityOfResidenceInputChange}
                    placeholder="City of Residence"
                    label="City of Residence"
                    variant="outlined"
                    fullWidth
                    required
                  />
                  {submitted && !userCredentials.cityOfResidence ? (
                    <span>Please enter a residence</span>
                  ) : null}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    name="message"
                    value={userCredentials.message}
                    onChange={handleLMessageInputChange}
                    label="Message"
                    multiline
                    rows={4}
                    placeholder="Type your message here"
                    variant="outlined"
                    fullWidth
                    required
                  />
                  {submitted && !userCredentials.message ? (
                    <span>Please enter a message</span>
                  ) : null}
                </Grid>
                <ReCAPTCHA
                  style={{ marginLeft: 6, width: 530, marginTop: 20 }}
                  sitekey="Your client site key"
                />
                <Grid item xs={12}>
                  <Button
                    style={{
                      width: 308,
                      backgroundColor: '#033148',
                    }}
                    type="submit"
                    name="register"
                    variant="contained"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  )
}

export default Register
