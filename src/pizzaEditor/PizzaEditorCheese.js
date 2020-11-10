import React, { useState } from 'react'
import { observer } from 'mobx-react'
import PizzaStore from './store/pizzaStore'

const PizzaEditorCheese =()=> {
    const [mozzarellaBox, setMozzarellaBox] = useState(false)
    const [cheddarBox, setCheddarBox] = useState(false)
    const [dorBlueBox, setdorBlueBox] = useState(false)
    let mozzarella = PizzaStore.pizzaData[0].cheeseP.mozzarella
    let cheddar = PizzaStore.pizzaData[0].cheeseP.cheddar 
    let dorBlue = PizzaStore.pizzaData[0].cheeseP.dorBlue

    const mozzarellaP = () => {
        if (mozzarellaBox ) { 
            PizzaStore.total(-mozzarella) 
            setMozzarellaBox(false) 
            PizzaStore.pizzaData[1].mozzarella = false
            
        } else { 
            PizzaStore.pizzaData[1].mozzarella = true
            PizzaStore.total(mozzarella) 
            setMozzarellaBox(true) 
        }
    }

    const cheddarP = () => {
        if (cheddarBox ) { 
            PizzaStore.total(-cheddar) 
            setCheddarBox(false) 
            PizzaStore.pizzaData[1].cheddar = false
        } else { 
            PizzaStore.total(cheddar) 
            setCheddarBox(true) 
            PizzaStore.pizzaData[1].cheddar = true
        }
    }

    const dorBlueP = () => {
        if (dorBlueBox) { 
            PizzaStore.total(-dorBlue) 
            setdorBlueBox(false)
            PizzaStore.pizzaData[1].dorBlue = false
        } else { 
            PizzaStore.total(dorBlue) 
            setdorBlueBox(true)
            PizzaStore.pizzaData[1].dorBlue = true
        }
    }

    return (
        <>
            <label>mozzarella</label>
            <input
                type="checkbox"
                checked={mozzarellaBox}
                onChange={mozzarellaP}
            />
            <label>cheddar</label>
            <input
                type="checkbox"
                checked={cheddarBox}
                onChange={cheddarP}
            />
            <label>dorBlue</label>
            <input
                type="checkbox"
                checked={dorBlueBox}
                onChange={dorBlueP}
            />
        </>
    )
}

export default observer(PizzaEditorCheese)