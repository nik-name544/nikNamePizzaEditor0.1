import React, { useState } from 'react'
import { observer } from 'mobx-react'
import PizzaStore from './store/pizzaStore'

const PizzaEditorMeat = ()=> {
    const [baconBox, setBaconBox] = useState(false)
    const [pepperoniBox, setPepperoniBox] = useState(false)
    const [hamBox, setHamBox] = useState(false) 
    let bacon = PizzaStore.pizzaData[0].meatP.bacon
    let pepperoni = PizzaStore.pizzaData[0].meatP.pepperoni
    let ham = PizzaStore.pizzaData[0].meatP.ham

    
    const baconP = () => {
        if (baconBox ) {
            PizzaStore.total(-bacon)  
            setBaconBox(false)
            PizzaStore.pizzaData[1].ham = false
        } else {
            PizzaStore.total(bacon)  
            setBaconBox(true)
            PizzaStore.pizzaData[1].ham = true 
        }
    }

    const pepperoniP = () => {
        if (pepperoniBox ) {
            PizzaStore.total(-pepperoni)  
            setPepperoniBox(false)
            PizzaStore.pizzaData[1].ham = false
        } else {
            PizzaStore.total(pepperoni)  
            setPepperoniBox(true)
            PizzaStore.pizzaData[1].ham = true
        }
    }

    const hamP = () => {
        if (hamBox) {
            PizzaStore.total(-ham)  
            setHamBox(false)
            PizzaStore.pizzaData[1].ham = false
        } else {
            PizzaStore.total(ham) 
            setHamBox(true) 
            PizzaStore.pizzaData[1].ham = true
        }
    }

    return (
        <>
            <label>bacon</label>
            <input
                type="checkbox"
                checked={baconBox}
                onChange={baconP}
            />
            <label>pepperoni</label>
            <input
                type="checkbox"
                checked={pepperoniBox}
                onChange={pepperoniP}
            />
            <label>ham</label>
            <input
                type="checkbox"
                checked={hamBox}
                onChange={hamP}
            />
        </>
    )

}

export default observer(PizzaEditorMeat)