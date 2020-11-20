import React, { useState } from 'react'
import { observer } from 'mobx-react'
import PizzaStore from './store/pizzaStore'

const PizzaEditorCheese = () => {
    const [mozzarellaBox, setMozzarellaBox] = useState(false)
    const [cheddarBox, setCheddarBox] = useState(false)
    const [dorBlueBox, setdorBlueBox] = useState(false)
    let mozzarella = PizzaStore.pizzaData[0].cheeseP.mozzarella
    let cheddar = PizzaStore.pizzaData[0].cheeseP.cheddar
    let dorBlue = PizzaStore.pizzaData[0].cheeseP.dorBlue

    const mozzarellaP = () => {
        if (mozzarellaBox) {
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
        if (cheddarBox) {
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
        <div className="cheese">
            <p className="cheese__title">Добавьте сыр</p>
            <div className="cheese__group">
                <div className="mozzarella__inner">
                    <p className="mozzarella__title">Моцарелла</p>
                    <div className="mozzarella__group">
                        <p className="mozzarella__price">30 ₽</p>
                        <input
                            type="checkbox"
                            checked={mozzarellaBox}
                            onChange={mozzarellaP}
                            className="mozzarella__box"
                        />
                    </div>
                </div>
                <div className="cheddar__inner">
                    <p className="cheddar__title">Чеддер</p>
                    <div className="cheddar__group">
                        <p className="cheddar__price">30 ₽</p>
                        <input
                            type="checkbox"
                            checked={cheddarBox}
                            onChange={cheddarP}
                            className="cheddar__box"
                        />
                    </div>
                </div>
                <div className="dor-blue__inner">
                    <p className="dor-blue__title">Дор Блю</p>
                    <div className="dor-blue__group">
                        <p className="dor-blue__price">30 ₽</p>
                        <input
                            type="checkbox"
                            checked={dorBlueBox}
                            onChange={dorBlueP}
                            className="dor-blue__box"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default observer(PizzaEditorCheese)