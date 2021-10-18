import React from 'react'
import Rooms from '../../components/rooms/roomsList/rooms.component'
import Stepper from '../../components/stepper/stepper.component'
import './roomslistpage.styles.css'

const RoomsPage = ({ match }) => {
  // console.log({ match })
  const [checkInDate, setCheckInDate] = React.useState('')
  const [checkOutDate, setCheckOutDate] = React.useState('')
  const [adultCount, setAdultCount] = React.useState('')
  const [childCount, setChildCount] = React.useState('')

  React.useEffect(() => {
    setCheckInDate(match.params.checkInDate)
    setCheckOutDate(match.params.checkOutDate)
    setAdultCount(match.params.adultCount)
    setChildCount(match.params.childCount)
    // eslint-disable-next-line
  }, [checkInDate, checkOutDate, adultCount, childCount])

  const handleChange = (event) => {
    const { name, value } = event.target

    if (name === 'checkin') return setCheckInDate(value)

    return setCheckOutDate(value)
  }

  return (
    <div className="roomspage">
      <h1>Stay period</h1>
      <div className="search">
        <div className="container fill_height1">
          <div className="row fill_height1">
            <div className="col fill_height1">
              <div className="search_tabs_container1">
                <div className="search_tabs d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start"></div>
              </div>

              <div className="search_panel active">
                <form
                  action="#"
                  id="search_form_1"
                  className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start"
                >
                  <div className="search_item">
                    <div>check in</div>
                    <input
                      name="checkin"
                      type="date"
                      className="check_in search_input"
                      placeholder="YYYY-MM-DD"
                      onChange={handleChange}
                      value={checkInDate}
                    />
                  </div>
                  <div className="search_item">
                    <div>check out</div>
                    <input
                      name="checkout"
                      type="date"
                      className="check_out search_input"
                      placeholder="YYYY-MM-DD"
                      onChange={handleChange}
                      value={checkOutDate}
                    />
                  </div>
                  <div className="search_item">
                    <div>adults</div>
                    <select
                      value={adultCount}
                      onChange={(e) => setAdultCount(e.target.value)}
                      name="adults"
                      id="adults_1"
                      className="dropdown_item_select search_input"
                    >
                      <option>0</option>
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                      <option>04</option>
                      <option>05</option>
                    </select>
                  </div>
                  <div className="search_item">
                    <div>children</div>
                    <select
                      value={childCount}
                      onChange={(e) => setChildCount(e.target.value)}
                      name="children"
                      id="children_1"
                      className="dropdown_item_select search_input"
                    >
                      <option>0</option>
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                      <option>04</option>
                      <option>05</option>
                    </select>
                  </div>
                  <button type="submit" className="button search_button">
                    search<span></span>
                    <span></span>
                    <span></span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Stepper />
      <Rooms />
    </div>
  )
}

export default RoomsPage
