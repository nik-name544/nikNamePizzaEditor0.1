import React from 'react'
import PizzaStore from './store/pizzaStore'
import { Link } from 'react-router-dom'

export default function pizzaEditorCheckout() {

    const tfList = PizzaStore.pizzaData[1]
    const newTfList = []
    for (const prop in tfList) {
        if (tfList[prop]) {
            newTfList.push(prop)
        }
    }
    let pizzaItem = newTfList.map((item, i) => {
        return (
            <div key={i} className="order-list__ing">
                <li>
                    {item}
                </li>
            </div>
        )
    })

    return (
        <>
            {/* <h1>you add:</h1>
            <ul>

            </ul>
            <h2>
                and cost it:
                </h2>
            <strong>
                {PizzaStore.defoultSauce + PizzaStore.defoultP}
            </strong>
            <br />
            <Link className="submitBtn" to="/pizza-editor-registration">зарегестрируйтесь перед подтверждением</Link> */}
            {/* <button type="button" onClick={onSubmit} className="submitBtn">Заказать за 200 руб</button> */}





            <div class="order">
                <div className="container">
                    <header class="order__header">
                        <div class="order__close-btn"></div>
                    </header>
                    <div class="order__ico  wrong"></div>
                    <div class="order__title">Спасибо за заказ!</div>
                    <div class="order__text">Заказ успешно оплачен, ждите вашу пиццу уже через час</div>
                    <div class="order__btn wrong">
                        <Link className="order__btn-text " to="/pizza-editor-registration">Попробовать еще раз</Link>
                    </div>
                    <div class="order-list__item">
                        <div class="order-list__item-top ">
                            <p class="order-list__item-num">Заказ 2390</p>
                            <p class="order-list__item-state">21 октября 2020, 13:40</p>
                        </div>
                        <div class="order-list__item-mid">
                            <p class="order-list__item-title">
                                Ленивая Маргарита
                </p>
                            <p class="order-list__item-text">
                                {pizzaItem}
                            </p>
                        </div>
                        <div class="order-list__item-bot">
                            <p class="order-list__item-paid">
                                {PizzaStore.defoultSauce + PizzaStore.defoultP} руб • оплата MC
                </p>
                            <p class="order-list__item-bot-state ">
                                Повторить заказ
                </p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
