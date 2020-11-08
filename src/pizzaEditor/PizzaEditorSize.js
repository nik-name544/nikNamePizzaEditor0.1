import React, { useState } from 'react'
import { observer } from 'mobx-react'
import PizzaStore from './store/pizzaStore'

const PizzaEditorSize = () => {
    const [size, setSize] = useState({ option: 'size1' }) 
    let pizzaBigPrice = PizzaStore.pizzaData[0].sizeP.size35

    const handleSize = (e) => {
        setSize({ option: e.target.value });
        if (size.option === 'size2') {
            PizzaStore.total(-pizzaBigPrice)
            PizzaStore.addItemRadio('')
        }else if(size.option ==='size1'){
            PizzaStore.total(pizzaBigPrice)
            PizzaStore.addItemRadio('big pizza')
        }
    }
 

    return (
        <>
            <label>pizza size 30</label>
            <input
                type="radio"
                value="size1"
                checked={size.option === 'size1'}
                onChange={handleSize.bind(this)}
            />
            <label>pizza size 35</label>
            <input
                type="radio"
                value="size2"
                checked={size.option === 'size2'}
                onChange={handleSize.bind(this)}
            /> 
        </>
    )
}

export default observer(PizzaEditorSize)