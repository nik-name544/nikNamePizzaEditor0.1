import React, { useState } from 'react'
import { observer } from 'mobx-react'
import PizzaStore from './store/pizzaStore'
import './pizzaEditorStyle.css'

const PizzaEditorSize = () => {
    const [size, setSize] = useState({ option: 'size30' })
    let pizzaBigPrice = PizzaStore.pizzaData[0].sizeP.size35

    const handleSize = (e) => {
        setSize({ option: e.target.value });
    }

    const changeSize = (e) => {
        if (e.target.value === 'size30') {
            PizzaStore.total(-pizzaBigPrice)
            PizzaStore.pizzaData[1].size30 = true
            PizzaStore.pizzaData[1].size35 = false
        } else if (e.target.value === 'size35') {
            PizzaStore.total(pizzaBigPrice)
            PizzaStore.pizzaData[1].size30 = false
            PizzaStore.pizzaData[1].size35 = true
        }
    }


    return (
        <div className=""> 
            <label>30 см</label>
            <input
                type="radio"
                value="size30"
                checked={size.option === 'size30'}
                onChange={handleSize}
                onClick={changeSize}
            />
            <label>35 см</label>
            <input
                type="radio"
                value="size35"
                checked={size.option === 'size35'}
                onChange={handleSize}
                onClick={changeSize}
            />
        </div >
    )
}

export default observer(PizzaEditorSize)