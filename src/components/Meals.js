import React , {useContext} from 'react'
import MealsContext from '../MealsContext'
import MealItem from './MealItem'
import "./Meals.css"
function Meals() {
    const {mealData} = useContext(MealsContext);


    const menuItems = mealData.map((item)=>{
        return(
                <MealItem
                name = {item.name}
                description = { item.description }
                price = { item.price }
                key = { item.id }
                id = { item.id }/>
        )
    })
  return (
    <div className='meals-container'>
        { menuItems }
    </div>
  )
}

export default Meals