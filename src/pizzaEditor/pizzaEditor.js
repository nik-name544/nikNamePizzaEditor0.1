import React, { useState, useEffect } from 'react'
import PizzaEditorSize from './PizzaEditorSize'
import PizzaEditorDough from './PizzaEditorDough'
import PizzaEditorSauce from './PizzaEditorSauce'
import PizzaEditorCheese from './PizzaEditorCheese'
import PizzaEditorVegetables from './PizzaEditorVegetables'
import PizzaEditorMeat from './PizzaEditorMeat'
import { observer } from 'mobx-react'
import PizzaStore from './store/pizzaStore'
import './pizzaEditorStyle.css'
import { Link } from 'react-router-dom'


const PizzaEditor = () => {
    // const [flag, setFlag] = useState(true)

    // const onSubmit = () => {
    //     setFlag(!flag)
    // }

    // let total = PizzaStore.defoultSauce + PizzaStore.defoultP

    // if (flag) {
    //"sobaka sdelai formu oplati!!!" 
    return (
        <div className="mainApp">
            <form>
                <div className="size-dough__inner">
                    <div className="block">
                        <PizzaEditorSize />
                    </div>
                    <div className="block">
                        <PizzaEditorDough />
                    </div>
                </div>
                <div className="block">
                    <PizzaEditorSauce />
                </div>
                <div className="block">
                    <PizzaEditorCheese />
                </div>
                <div className="block">
                    <PizzaEditorVegetables />
                </div>
                <div className="block">
                    <PizzaEditorMeat />
                </div>
                <div className="submit__btn-wrapper">
                    <div className="submit__btn-inner active">
                        <Link to="/pizza-editor-registration" className="submit__btn active">Заказать за 200 руб</Link>
                    </div>
                    {/* <button type="button" onClick={onSubmit} className="submitBtn">Заказать за 200 руб</button> */}
                </div>
            </form>
        </div>
    )
    // } else {
    //     const tfList = PizzaStore.pizzaData[1]
    //     const newTfList = []
    //     for (const prop in tfList) {
    //         if (tfList[prop]) {
    //             newTfList.push(prop)
    //             console.log(tfList[prop] + ' kdkd')
    //         }
    //     }
    //     console.log(newTfList)
    //     console.log(tfList)
    //     let pizzaItem = newTfList.map((item, i) => {
    //         return (
    //             <div key={i}>
    //                 <li>
    //                     {item}
    //                 </li>
    //             </div>
    //         )
    //     })
    // return (
    //     <>
    //         <h1>you add:</h1>
    //         <ul>
    //             {pizzaItem}
    //         </ul>
    //         <h2>
    //             and cost it:
    //         </h2>
    //         <strong>
    //             {PizzaStore.defoultSauce + PizzaStore.defoultP}

    //         </strong>
    //         <br />
    //         <button type="button" onClick={onSubmit} className="submitBtn">Заказать за 200 руб</button>
    //     </>
    // )
    // }
}

export default observer(PizzaEditor)