import React, { useContext } from 'react'
import CartItem from './CartItem'
import "./ShoppingCart.css";
import MealsContext from '../MealsContext';
import { Link } from 'react-router-dom';

function ShoppingCart() {
  const { items, amount, addItem, removeItem, emptyCart } = useContext(MealsContext);
  const totalAmount = `${amount.toFixed(2)}`
  const cartElements = items.map(item=>{
    return <CartItem 
            key = { item.id }
            id = { item.id }
            name = { item.name }
            price = { item.price }
            quantity = { item.amount }
            onAdd = { addItemHandler.bind(null, item) }
            onRemove = { removeItemHandler.bind(null, item.id)  }/>
  })

  function addItemHandler(item){
    addItem({
      ...item,
      amount: 1
    })
  }

  function removeItemHandler(id){
    removeItem(id);
  }



  return (
    <div className='shopping-cart'>
         {cartElements} 
        <div className="cart-total">
          <h1>Total Amount</h1>
          <h1>${ totalAmount }</h1>
        </div>
          <div className='btns'>
            <Link to="/">
              <button className='close-btn btn'>Close</button>
            </Link>
            {items.length > 0 && <button onClick={ emptyCart } className='order-btn btn'>Order</button>}
          </div>
          { items.length === 0 && <h1>KEEP ORDERING...</h1>}
    </div>
  )
}

export default ShoppingCart