import React, { useState } from 'react'
import { observer } from 'mobx-react'
import PizzaStore from './store/pizzaStore'


const PizzaEditorVegetables =()=> {
    const [tomatoBox, setTomatoBox] = useState(false)
    const [mushroomsBox, setMushroomsBox] = useState(false)
    const [pepperBox, setPepperBox] = useState(false) 
    let tomato = PizzaStore.pizzaData[0].vegetablesP.tomato
    let mushrooms = PizzaStore.pizzaData[0].vegetablesP.mushrooms
    let pepper = PizzaStore.pizzaData[0].vegetablesP.pepper

    
    const tomatoP = () => {
        if (tomatoBox ) { 
            PizzaStore.total(-tomato)
            setTomatoBox(false)
            PizzaStore.addItem('')
        } else { 
            PizzaStore.total(tomato) 
            setTomatoBox(true) 
            PizzaStore.addItem('tomato')
        }
    }

    const mushroomsP = () => {
        if (mushroomsBox ) { 
            PizzaStore.total(-mushrooms) 
            setMushroomsBox(false)
            PizzaStore.addItem('')
        } else { 
            setMushroomsBox(true)
            PizzaStore.total(mushrooms) 
            PizzaStore.addItem('mushrooms')
        }
    }

    const pepperP = () => {
        if (pepperBox) { 
            PizzaStore.total(-pepper) 
            setPepperBox(false)
            PizzaStore.addItem('')
        } else { 
            setPepperBox(true)
            PizzaStore.total(pepper) 
            PizzaStore.addItem('pepper')
        }
    }

    return (
        <>
            <label>tomato</label>
            <input
                type="checkbox"
                checked={tomatoBox}
                onChange={tomatoP}
            />
            <label>mushrooms</label>
            <input
                type="checkbox"
                checked={mushroomsBox}
                onChange={mushroomsP}
            />
            <label>pepper</label>
            <input
                type="checkbox"
                checked={pepperBox}
                onChange={pepperP}
            />
        </>
    )
}

export default observer(PizzaEditorVegetables)