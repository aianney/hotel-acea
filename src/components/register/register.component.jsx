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

  return (
    <div className="register">
      <Typography gutterBottom variant="h3" align="center"></Typography>
      <Grid>
        <Card
          //   className="register-form"
          //   style={{
          //     maxWidth: 1235,
          //     padding: '20px 5px',
          //     margin: '0 auto',
          //     marginBottom: '100',
          //   }}
          style={{ width: 'calc(97% + 8px)', paddingLeft: '25' }}
        >
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
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter first name"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter last name"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Birthday"
                    label="Birthday"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Country"
                    label="Country"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="email"
                    placeholder="Enter email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="number"
                    placeholder="Enter phone number"
                    label="Phone"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Home Address"
                    label="Home Address"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="City of Residence"
                    label="City of Residence"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    multiline
                    rows={4}
                    placeholder="Type your message here"
                    variant="outlined"
                    fullWidth
                    required
                  />
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
                    variant="contained"
                    // color="primary"
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
