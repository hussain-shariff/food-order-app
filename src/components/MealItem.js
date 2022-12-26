import React, {useContext, useRef} from 'react'
import "./MealItem.css"
import MealsContext from '../MealsContext';


function MealItem(props) {
    const {addItem} = useContext(MealsContext);
    const items = useRef();
    const [isFormValid, setIsFormValid] = React.useState(true);


    function onAddToCard(amount){
        addItem({
            name : props.name,
            amount : amount,
            price : props.price,
            id : props.id
        })
    }
    
    function handleSubmit(e){
        e.preventDefault();
        const enteredAmount = items.current.value;
        const enteredAmountNumber = + enteredAmount;
        if (enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 0 ||
            enteredAmountNumber > 5){
                setIsFormValid(false)
                return
            }
        setIsFormValid(true)
        items.current.value = 1
        onAddToCard(enteredAmountNumber)
    }
        
  return (
        <div className='item'>
            <div>
                <h3>{props.name}</h3>
                <p className='description'>{props.description}</p>
                <div className='price'>${props.price}</div>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <h3>
                        <label htmlFor={props.id}>Amount</label>  
                        <input 
                            step="1" 
                            id={props.id} 
                            defaultValue = "1" 
                            type="number" 
                            ref={ items}/>
                    </h3>
                    <input className='sub' type="submit"  value='+ Add'/>
                    {!isFormValid && <p>please enter number between (1-5).</p> }
                </form>
            </div>
        </div>
  )
}

export default MealItem