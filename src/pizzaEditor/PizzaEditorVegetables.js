import React, { useState } from 'react'
import { observer } from 'mobx-react'
import PizzaStore from './store/pizzaStore'


const PizzaEditorVegetables = () => {
    const [tomatoBox, setTomatoBox] = useState(false)
    const [mushroomsBox, setMushroomsBox] = useState(false)
    const [pepperBox, setPepperBox] = useState(false)
    let tomato = PizzaStore.pizzaData[0].vegetablesP.tomato
    let mushrooms = PizzaStore.pizzaData[0].vegetablesP.mushrooms
    let pepper = PizzaStore.pizzaData[0].vegetablesP.pepper


    const tomatoP = () => {
        if (tomatoBox) {
            PizzaStore.total(-tomato)
            setTomatoBox(false)
            PizzaStore.pizzaData[1].tomato = false
        } else {
            PizzaStore.total(tomato)
            setTomatoBox(true)
            PizzaStore.pizzaData[1].tomato = true
        }
    }

    const mushroomsP = () => {
        if (mushroomsBox) {
            PizzaStore.total(-mushrooms)
            setMushroomsBox(false)
            PizzaStore.pizzaData[1].mushrooms = false
        } else {
            setMushroomsBox(true)
            PizzaStore.total(mushrooms)
            PizzaStore.pizzaData[1].mushrooms = true
        }
    }

    const pepperP = () => {
        if (pepperBox) {
            PizzaStore.total(-pepper)
            setPepperBox(false)
            PizzaStore.pizzaData[1].pepper = false
        } else {
            setPepperBox(true)
            PizzaStore.total(pepper)
            PizzaStore.pizzaData[1].pepper = true
        }
    }

    return (

        <div className="vegetables">
            <p className="vegetables__title">Добавьте овощи</p>
            <div className="vegetables__group">
                <div className="tomato__inner">
                    <p className="tomato__title">Помидор</p>
                    <div className="tomato__group">
                        <p className="tomato__price">20 ₽</p>

                        <input
                            type="checkbox"
                            checked={tomatoBox}
                            onChange={tomatoP}
                            className="tomato__box"
                        />
                    </div>
                </div>
                <div className="mushrooms__inner">
                    <p className="mushrooms__title">Грибы</p>
                    <div className="mushrooms__group">
                        <p className="mushrooms__price">40 ₽</p>

                        <input
                            type="checkbox"
                            checked={mushroomsBox}
                            onChange={mushroomsP}
                            className="mushrooms__box"
                        />
                    </div>
                </div>
                <div className="pepper__inner">
                    <p className="pepper__title">Перец</p>
                    <div className="pepper__group">
                        <p className="pepper__price">30 ₽</p>
                        <input
                            type="checkbox"
                            checked={pepperBox}
                            onChange={pepperP}
                            className="pepper__box"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default observer(PizzaEditorVegetables)