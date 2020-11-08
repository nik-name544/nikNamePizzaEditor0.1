import React, { useState } from 'react'
import { observer } from 'mobx-react'
import PizzaStore from './store/pizzaStore'

const PizzaEditorCheese =()=> {
    const [cheeseBox, setCheeseBox] = useState(false)
    const [cheeseBox1, setCheeseBox1] = useState(false)
    const [cheeseBox2, setCheeseBox2] = useState(false)
    let mozzarella = PizzaStore.pizzaData[0].cheeseP.mozzarella
    let cheddar = PizzaStore.pizzaData[0].cheeseP.cheddar 
    let dorBlue = PizzaStore.pizzaData[0].cheeseP.dorBlue

    const mozzarellaP = () => {
        if (cheeseBox ) { 
            PizzaStore.total(-mozzarella) 
            setCheeseBox(false)
            PizzaStore.addItem('')
            
        } else { 
            PizzaStore.total(mozzarella) 
            setCheeseBox(true)
            PizzaStore.addItem('mozzarella')
        }
    }

    const cheddarP = () => {
        if (cheeseBox1 ) { 
            PizzaStore.total(-cheddar) 
            setCheeseBox1(false)
            PizzaStore.addItem('')
        } else { 
            PizzaStore.total(cheddar) 
            setCheeseBox1(true)
            PizzaStore.addItem('cheddar')
        }
    }

    const dorBlueP = () => {
        if (cheeseBox2) { 
            PizzaStore.total(-dorBlue) 
            setCheeseBox2(false)
            PizzaStore.addItem('')
        } else { 
            PizzaStore.total(dorBlue) 
            setCheeseBox2(true)
            PizzaStore.addItem('dorBlue')
        }
    }

    return (
        <>
            <label>mozzarella</label>
            <input
                type="checkbox"
                checked={cheeseBox}
                onChange={mozzarellaP}
            />
            <label>cheddar</label>
            <input
                type="checkbox"
                checked={cheeseBox1}
                onChange={cheddarP}
            />
            <label>dorBlue</label>
            <input
                type="checkbox"
                checked={cheeseBox2}
                onChange={dorBlueP}
            />
        </>
    )
}

export default observer(PizzaEditorCheese)