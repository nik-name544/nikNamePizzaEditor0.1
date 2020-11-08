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
            PizzaStore.addItem('')
        } else {
            PizzaStore.total(bacon)  
            setBaconBox(true)
            PizzaStore.addItem('bacon')
        }
    }

    const pepperoniP = () => {
        if (pepperoniBox ) {
            PizzaStore.total(-pepperoni)  
            setPepperoniBox(false)
            PizzaStore.addItem('')
        } else {
            PizzaStore.total(pepperoni)  
            setPepperoniBox(true)
            PizzaStore.addItem('pepperoni')
        }
    }

    const hamP = () => {
        if (hamBox) {
            PizzaStore.total(-ham)  
            setHamBox(false)
            PizzaStore.addItem('')
        } else {
            PizzaStore.total(ham) 
            setHamBox(true)
            PizzaStore.addItem('pepperoni')
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