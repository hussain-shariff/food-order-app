import React from 'react'
import "./Main.css"
import Meals from './Meals'
function Main() {
  return (
    <div className='main'>
        <div className="meals-summary">
            <h2>Delicious Food, Delivered To You</h2>
            <p>
                Choose your favorite meal from our broad selection of available meals
                and enjoy a delicious lunch or dinner at home.
            </p>
            <p>
                All our meals are cooked with high-quality ingredients, just-in-time and
                of course by experienced chefs!
            </p>
        </div>
        <Meals/>
    </div>
  )
}

export default Main