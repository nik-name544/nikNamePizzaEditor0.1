import React, { useState } from 'react'
import { observer } from 'mobx-react'
import PizzaStore from './store/pizzaStore'


const PizzaEditorSauce = () => {
    const [sauce, setSauce] = useState({ option: 'tomatoSauce' })


    const handleSauce = (e) => {
        setSauce({ option: e.target.value });
    }

    const changeSause = (e) => {
        if (e.target.value === 'tomatoSauce') {
            PizzaStore.pizzaData[1].tomatoSauce = true
            PizzaStore.pizzaData[1].spicySauce = false
            PizzaStore.pizzaData[1].whiteSauce = false
        } else if (e.target.value === 'whiteSauce') {
            PizzaStore.pizzaData[1].whiteSauce = true
            PizzaStore.pizzaData[1].spicySauce = false
            PizzaStore.pizzaData[1].tomatoSauce = false
        } else if (e.target.value === 'spicySauce') {
            PizzaStore.pizzaData[1].spicySauce = true
            PizzaStore.pizzaData[1].tomatoSauce = false
            PizzaStore.pizzaData[1].whiteSauce = false
        }
        PizzaStore.radioTotal(e.target.value)

    }

    return (

        <div className="sauce">
            <p className="sauce__title">Выберите соус</p>
            <div className="sauce__inner">
                <label className="tomato-sauce__label"> 
                    <input
                        type="radio"
                        value="tomatoSauce"
                        checked={sauce.option === 'tomatoSauce'}
                        onChange={handleSauce}
                        onClick={changeSause}
                        className="tomato-sauce__box"
                    />
                    <span id="tomato-sauce__text">
                        Томатный
                    </span>
                </label>
                <label className="white-sauce__label"> 
                    <input
                        type="radio"
                        value="whiteSauce"
                        checked={sauce.option === 'whiteSauce'}
                        onChange={handleSauce}
                        onClick={changeSause}
                        className="white-sauce__box"
                    />
                    <span id="white-sauce__text">
                        Белый
                    </span>
                </label>
                <label className="spicy-sauce__label"> 
                    <input
                        type="radio"
                        value="spicySauce"
                        checked={sauce.option === 'spicySauce'}
                        onChange={handleSauce}
                        onClick={changeSause}
                        className="spicy-sauce__box"
                    />
                    <span id="spicy-sauce__text">
                        Острый
                    </span>
                </label>
            </div>
        </div>
    )

}

export default observer(PizzaEditorSauce)