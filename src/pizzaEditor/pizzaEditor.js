import React, { useState } from 'react'
import PizzaEditorSize from './PizzaEditorSize'
import PizzaEditorDough from './PizzaEditorDough'
import PizzaEditorSauce from './PizzaEditorSauce'
import PizzaEditorCheese from './PizzaEditorCheese'
import PizzaEditorVegetables from './PizzaEditorVegetables'
import PizzaEditorMeat from './PizzaEditorMeat'
import { observer } from 'mobx-react'
import PizzaStore from './store/pizzaStore'


const PizzaEditor = () => {
    const [flag, setFlag] = useState(true)

    const onSubmit = () => {
        setFlag(!flag)
        console.log(PizzaStore.listOfItems)
    }

    if (flag) {

        return (
            <>
                <form>
                    <PizzaEditorSize />
                    <br />
                    <PizzaEditorDough />
                    <br />
                    <PizzaEditorSauce />
                    <br />
                    <PizzaEditorCheese />
                    <br />
                    <PizzaEditorVegetables />
                    <br />
                    <PizzaEditorMeat />
                    <br />
                    <button type="button" onClick={onSubmit} >send</button>
                </form>
            </>
        )
    } else {
        let pizzaItems = PizzaStore.listOfItems
        const uniquePizzaItem = pizzaItems.filter((item, i, array) => array.indexOf(item) === i)
        let pizzaItem = uniquePizzaItem.map((item, i) => {
            return (
                <div key={i}>
                    <li>
                        {item}
                    </li>
                </div>
            )
        })
        return (
            <>
                <h1>you add:</h1>
                <ul>
                    {pizzaItem}
                </ul>
                <h2>
                    and cost it:
                </h2>
                <strong>
                    {PizzaStore.defoultSauce + PizzaStore.defoultP}

                </strong>
                <br />
                <button type="button" onClick={onSubmit} >send</button>
            </>
        )
    }
}

export default observer(PizzaEditor)