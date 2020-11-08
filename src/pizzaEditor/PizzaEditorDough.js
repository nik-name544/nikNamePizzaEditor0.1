import React, { useState, useEffect } from 'react'
import { observer } from 'mobx-react'
import PizzaStore from './store/pizzaStore'

const PizzaEditorDough = () => {
    const [dough, setDough] = useState({ option: 'dough1' })
    let dougThinP = PizzaStore.pizzaData[0].dougP.thin
    let dougFluffyP = PizzaStore.pizzaData[0].dougP.fluffy


    const handleDough = (e) => {
        setDough({ option: e.target.value })
        if (dough.option === 'dough2') {
            let some1 = -dougFluffyP + dougThinP
            PizzaStore.total(some1) 
            PizzaStore.addItemRadio('doug thin')
        } else if (dough.option === 'dough1') {
            let some = -dougThinP + dougFluffyP
            PizzaStore.total(some) 
            PizzaStore.addItemRadio('doug fluffy')
        } 
    }
 

    return (
        <>
            <label>dough: thin</label>
            <input
                type="radio"
                value="dough1"
                checked={dough.option === 'dough1'}
                onChange={handleDough.bind(this)}
            />
            <label>dough: fluffy</label>
            <input
                type="radio"
                value="dough2"
                checked={dough.option === 'dough2'}
                onChange={handleDough.bind(this)}
            />
        </>
    )
}

export default observer(PizzaEditorDough)