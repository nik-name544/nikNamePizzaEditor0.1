import React, { useState } from 'react'
import { observer } from 'mobx-react'
import PizzaStore from './store/pizzaStore'


const PizzaEditorSauce = () => {
    const [sauce, setSauce] = useState({ option: 'tomatoSauce' })


    const handleSauce = (e) => {
        setSauce({ option: e.target.value });  
    }

    const changeSause = (e) => { 
        if (e.target.value === 'tomatoSauce') {
            PizzaStore.radioTotal('tomatoSauce')  
            PizzaStore.pizzaData[1].tomatoSauce = true
            PizzaStore.pizzaData[1].spicySauce = false  
            PizzaStore.pizzaData[1].whiteSauce = false
        } else if (e.target.value === 'whiteSauce') {
            PizzaStore.radioTotal('whiteSauce')  
            PizzaStore.pizzaData[1].whiteSauce = true
            PizzaStore.pizzaData[1].spicySauce = false 
            PizzaStore.pizzaData[1].tomatoSauce = false 
        } else if (e.target.value === 'spicySauce') {
            PizzaStore.radioTotal('spicySauce') 
            PizzaStore.pizzaData[1].spicySauce = true 
            PizzaStore.pizzaData[1].tomatoSauce = false
            PizzaStore.pizzaData[1].whiteSauce = false
        }
        
    }

    return (

        <>
            <label>sauce: tomato sauce</label>
            <input
                type="radio"
                value="tomatoSauce"
                checked={sauce.option === 'tomatoSauce'}
                onChange={handleSauce}
                onClick={changeSause}
            />
            <label>sauce: white sauce</label>
            <input
                type="radio"
                value="whiteSauce"
                checked={sauce.option === 'whiteSauce'}
                onChange={handleSauce}
                // onChange={handleSauce.bind(this)}
                onClick={changeSause}
            />
            <label>sauce: spicy sauce</label>
            <input
                type="radio"
                value="spicySauce"
                checked={sauce.option === 'spicySauce'}
                onChange={handleSauce}
                onClick={changeSause}
            />
        </>
    )

}

export default observer(PizzaEditorSauce)