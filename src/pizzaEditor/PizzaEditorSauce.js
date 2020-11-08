import React, { useState } from 'react'
import { observer } from 'mobx-react'
import PizzaStore from './store/pizzaStore'


const PizzaEditorSauce = () => {
    const [sauce, setSauce] = useState({ option: 'sauce1' })


    const handleSauce = (e) => {
        setSauce({ option: e.target.value });
    }

    const changeSause = (e) => {
        console.log(e.target.value)
        if (e.target.value === 'sauce1') {
            PizzaStore.radioTotal('tomatoSauce')
            PizzaStore.addItemRadio('tomatoSauce')
        } else if (e.target.value === 'sauce2') {
            PizzaStore.radioTotal('whiteSauce')
            PizzaStore.addItemRadio('whiteSauce')
        } else if (e.target.value === 'sauce3') {
            PizzaStore.radioTotal('spicySauce')
            PizzaStore.addItemRadio('spicySauce')
        } 
    }

    return (

        <>
            <label>sauce: tomato sauce</label>
            <input
                type="radio"
                value="sauce1"
                checked={sauce.option === 'sauce1'}
                onChange={handleSauce.bind(this)}
                onClick={changeSause}
            />
            <label>sauce: white sauce</label>
            <input
                type="radio"
                value="sauce2"
                checked={sauce.option === 'sauce2'}
                onChange={handleSauce.bind(this)}
                onClick={changeSause}
            />
            <label>sauce: spicy sauce</label>
            <input
                type="radio"
                value="sauce3"
                checked={sauce.option === 'sauce3'}
                onChange={handleSauce.bind(this)}
                onClick={changeSause}
            />
        </>
    )

}

export default observer(PizzaEditorSauce)