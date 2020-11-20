import React, { useState, useEffect } from 'react'
import { observer } from 'mobx-react'
import PizzaStore from './store/pizzaStore'

const PizzaEditorDough = () => {
    const [dough, setDough] = useState({ option: 'dough1' })
    let dougThinP = PizzaStore.pizzaData[0].dougP.thin
    let dougFluffyP = PizzaStore.pizzaData[0].dougP.fluffy


    const handleDough = (e) => {
        setDough({ option: e.target.value })
    }

    const changeDough = (e) => {
        if (e.target.value === 'dough1') {
            let doughP = -dougFluffyP + dougThinP
            PizzaStore.total(doughP)
            PizzaStore.pizzaData[1].thin = true
            PizzaStore.pizzaData[1].fluffy = false
        } else if (e.target.value === 'dough2') {
            let doughP1 = -dougThinP + dougFluffyP
            PizzaStore.total(doughP1)
            PizzaStore.pizzaData[1].thin = false
            PizzaStore.pizzaData[1].fluffy = true
        }
    }


    return (
        <div className="dough">
            <p className="dough__title">Тесто</p>
            <div className="dough__inner">
                <label className="dough-thin__label">
                    <input
                        type="radio"
                        value="dough1"
                        checked={dough.option === 'dough1'}
                        onChange={handleDough}
                        onClick={changeDough}
                        className="dough-thin__box"
                    />
                    <span id="dough-thin__text">
                        Тонкое
                </span>
                </label>
                <label className="dough-fluffy__label">
                    <input
                        type="radio"
                        value="dough2"
                        checked={dough.option === 'dough2'}
                        onChange={handleDough}
                        onClick={changeDough}
                        className="dough-fluffy__box"
                    />
                    <span id="dough-fluffy__text">
                        Пышное
                </span>
                </label>
            </div>
        </div>
    )
}

export default observer(PizzaEditorDough)