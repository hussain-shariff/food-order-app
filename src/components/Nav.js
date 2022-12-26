import React, {useContext} from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'
import MealsContext from '../MealsContext'

function Nav() {
  const {items} = useContext(MealsContext);
  const numberOfItems = items.reduce((accumulator, currentItem)=>{
    return accumulator + currentItem.amount;
  }, 0)

  return (
    <div className='nav-bar'>
        <Link to="/">
          <h1>React Meals</h1>
        </Link>
        <Link to="/cart">
        <button><i class="fa-sharp fa-solid fa-cart-shopping"></i> <h4>Your Cart</h4> <span>{numberOfItems}</span></button>
        </Link>
    </div>
  )
}

export default Nav