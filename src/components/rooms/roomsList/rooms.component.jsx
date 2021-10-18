import React from 'react'
import './rooms.styles.css'
import SearchResult from '../roomsearch/roomsearch.component'

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__info"></div>
      <SearchResult
        img="https://hotelreservations.ph/testacea/images/rooms/DSVBAR.jpg"
        title="Deluxe Sea View"
        location="Capture the splendor of the sea in full bird’s eye view on a more expansive private balcony. Listen to the music that the waves make."
        description="2 guest · 2 double beds · 34sqm."
        price="₱12,000 / night"
      />
      <SearchResult
        img="https://hotelreservations.ph/testacea/images/rooms/SSVBAR.jpg"
        location="Wake up in a sweeping view of the ocean from your balcony haven. Look ahead with views of the blue skies meeting the deep clear waters."
        title="Superior Sea view"
        description="2 guest · 2 double beds · 32sqm."
        price="₱11,500 / night"
      />
      <SearchResult
        img="https://hotelreservations.ph/testacea/images/rooms/DSVBAR.jpg"
        title="Deluxe Sea View"
        location="Capture the splendor of the sea in full bird’s eye view on a more expansive private balcony. Listen to the music that the waves make."
        description="2 guest · 2 double beds · 34sqm."
        price="₱12,000 / night"
      />
      <SearchResult
        img="https://hotelreservations.ph/testacea/images/rooms/SSVBAR.jpg"
        location="Wake up in a sweeping view of the ocean from your balcony haven. Look ahead with views of the blue skies meeting the deep clear waters."
        title="Superior Sea view"
        description="2 guest · 2 double beds · 32sqm."
        price="₱11,500 / night"
      />

      <SearchResult
        img="https://hotelreservations.ph/testacea/images/rooms/STDBAR.jpg"
        location="Be enchanted with a picture-perfect oasis of landscapes and flowers. Let your senses be filled with optimism through glimpses of the resort gardens."
        title="Standard Room"
        description="3 guest · 2 double beds· 28sqm."
        price="₱10,500 / night"
      />

      <SearchResult
        img="https://hotelreservations.ph/testacea/images/rooms/STDBAR.jpg"
        location="Be enchanted with a picture-perfect oasis of landscapes and flowers. Let your senses be filled with optimism through glimpses of the resort gardens."
        title="Standard Room"
        description="3 guest · 2 double beds· 28sqm."
        price="₱10,500 / night"
      />
    </div>
  )
}

export default SearchPage
