import React, { useState } from 'react'
import { observer } from 'mobx-react'
import PizzaStore from './store/pizzaStore'

const PizzaEditorMeat = () => {
    const [baconBox, setBaconBox] = useState(false)
    const [pepperoniBox, setPepperoniBox] = useState(false)
    const [hamBox, setHamBox] = useState(false)
    let bacon = PizzaStore.pizzaData[0].meatP.bacon
    let pepperoni = PizzaStore.pizzaData[0].meatP.pepperoni
    let ham = PizzaStore.pizzaData[0].meatP.ham


    const baconP = () => {
        if (baconBox) {
            PizzaStore.total(-bacon)
            setBaconBox(false)
            PizzaStore.pizzaData[1].bacon = false
        } else {
            PizzaStore.total(bacon)
            setBaconBox(true)
            PizzaStore.pizzaData[1].bacon = true
        }
    }

    const pepperoniP = () => {
        if (pepperoniBox) {
            PizzaStore.total(-pepperoni)
            setPepperoniBox(false)
            PizzaStore.pizzaData[1].pepperoni = false
        } else {
            PizzaStore.total(pepperoni)
            setPepperoniBox(true)
            PizzaStore.pizzaData[1].pepperoni = true
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
        <div className="meat">
            <p className="meat__title">Добавьте овощи</p>
            <div className="meat__group">
                <div className="bacon__inner">
                    <p className="bacon__title">Бекон</p>
                    <div className="bacon__group">
                        <p className="bacon__price">35 ₽</p>
                        <input
                            type="checkbox"
                            checked={baconBox}
                            onChange={baconP}
                            className="bacon__box"
                        />
                    </div>
                </div>
                <div className="pepperoni__inner">
                    <p className="pepperoni__title">Пепперони</p>
                    <div className="pepperoni__group">
                        <p className="pepperoni__price">35 ₽</p>
                        <input
                            type="checkbox"
                            checked={pepperoniBox}
                            onChange={pepperoniP}
                            className="pepperoni__box"
                        />
                    </div>
                </div>
                <div className="ham__inner">
                    <p className="ham__title">Ветчина</p>
                    <div className="ham__group">
                        <p className="ham__price">20 ₽</p>
                        <input
                            type="checkbox"
                            checked={hamBox}
                            onChange={hamP}
                            className="ham__box"
                        />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default observer(PizzaEditorMeat)