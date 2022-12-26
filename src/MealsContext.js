import React, {createContext, useState, useReducer} from "react";
import data from "./data.js"

const defaultCartState = {
    items : [],
    amount: 0
}

function cartReducer(state, action){

        if (action.type === "ADD"){
            const updatedAmount = state.amount + (action.item.amount * action.item.price);
            const itemPresentIndex = state.items.findIndex(item=> item.id === action.item.id);
            const existingItem = state.items[itemPresentIndex];

            let updatedItems;
            if (itemPresentIndex > -1){
                const updatedItem = {
                    ...existingItem,
                    amount : existingItem.amount + action.item.amount
                }
                updatedItems = [...state.items];
                updatedItems[itemPresentIndex] = updatedItem;
            }else{
                updatedItems = state.items.concat( action.item );}
            
            return{
                items: updatedItems,
                amount: updatedAmount
            }}

        if (action.type === "REMOVE"){
            const itemRemoveIndex = state.items.findIndex(item=> item.id === action.id);
            const getExistingItem = state.items[itemRemoveIndex];
            const updatedAmount = state.amount - getExistingItem.price;

            let updatedItems;
            if (getExistingItem.amount === 1){
                updatedItems = state.items.filter(item=> item.id !== action.id)

            }else{
                const updatedItem = {
                    ...getExistingItem,
                    amount : getExistingItem.amount -1
                }
                updatedItems = [...state.items]
                updatedItems[itemRemoveIndex] = updatedItem
            }
            return{
                items: updatedItems,
                amount: updatedAmount
            }
            
    }

    if (action.type === "EMPTY"){
        return{
            items : [],
            amount: 0
        }
    }


    return defaultCartState
}



const MealsContext = createContext()

export const MealsProvider=({children})=> {
    // STATES
    const [cartState, dispatch] = useReducer(cartReducer, defaultCartState)
    const [mealData, setMealData] = useState(data);

    // ACTIONS

    function addToCart(item){
        dispatch({
            type: 'ADD',
            item : item
        })
    }

    function removeFromCart(id){
        dispatch({
            type: 'REMOVE',
            id : id
        })
    }

    function emptycart(){
        dispatch({
            type: "EMPTY"
        })
    }

    const values= {
        mealData,
        items: cartState.items, 
        amount : cartState.amount,
        addItem: addToCart, 
        removeItem: removeFromCart,
        emptyCart : emptycart
    }

    return(
        <MealsContext.Provider value = {values}>
            {children}
        </MealsContext.Provider>
    )
}

export default MealsContext

