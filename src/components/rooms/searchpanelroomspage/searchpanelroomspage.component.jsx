import React from 'react'
import './searchpanelroomspage.styles.css'

const SearchPanelRooms = () => {
  //   const { checkInDate, checkOutDate, adultCount, childCount } = React.useState(
  //     '',
  //   )
  return (
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
                  />
                </div>
                <div className="search_item">
                  <div>check out</div>
                  <input
                    name="checkout"
                    type="date"
                    className="check_out search_input"
                    placeholder="YYYY-MM-DD"
                  />
                </div>
                <div className="search_item">
                  <div>adults</div>
                  <select
                    name="adults"
                    id="adults_1"
                    className="dropdown_item_select search_input"
                  >
                    <option>0</option>
                    <option>01</option>
                    <option>02</option>
                  </select>
                </div>
                <div className="search_item">
                  <div>children</div>
                  <select
                    name="children"
                    id="children_1"
                    className="dropdown_item_select search_input"
                  >
                    <option>0</option>
                    <option>01</option>
                    <option>02</option>
                  </select>
                </div>
                <button className="button search_button">
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
  )
}

export default SearchPanelRooms
