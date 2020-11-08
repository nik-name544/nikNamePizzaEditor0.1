import { observable, action } from 'mobx';

class PizzaStore {
    @observable pizzaData = pizzaDataStore()

    @observable defoultP = 240 

    @observable listOfItems = []

    @observable defoultSauce = this.defoultP

    @action total(newP) {
        this.defoultP += newP
        console.log(this.defoultP)
    }

    @action addItem(item) {
        let newItem = item.toString()
        this.listOfItems.push(newItem)
    }

    @action addItemRadio(item) { 
        const newItem = item.toString() 
        this.listOfItems.push(newItem)
    }
 
    @action radioTotal(sauce) {
        console.log(sauce)
        if (sauce === 'whiteSauce') {
            this.defoultSauce = this.pizzaData[0].sauceP.whiteSauce - this.pizzaData[0].sauceP.tomatoSauce 
        } else if (sauce === 'spicySauce') {
            this.defoultSauce = this.pizzaData[0].sauceP.spicySauce - this.pizzaData[0].sauceP.tomatoSauce 
        } else if (sauce === 'tomatoSauce') {
            this.defoultSauce = this.pizzaData[0].sauceP.tomatoSauce - this.pizzaData[0].sauceP.tomatoSauce 
        }
        // console.log(this.defoultP + ' 1234')
        // console.log(this.defoultSauce + ' 12345')
        // console.log(this.defoultP + this.defoultSauce + ' 123456') 
    } 
}


export default new PizzaStore()

function pizzaDataStore() {
    return [
        {
            sizeP: {
                size30: 200,
                size35: 50
            },

            dougP: {
                thin: 25,
                fluffy: 40
            },

            sauceP: {
                tomatoSauce: 15,
                whiteSauce: 20,
                spicySauce: 25
            },

            cheeseP: {
                mozzarella: 30,
                cheddar: 30,
                dorBlue: 30
            },

            vegetablesP: {
                tomato: 20,
                mushrooms: 40,
                pepper: 30
            },

            meatP: {
                bacon: 35,
                pepperoni: 35,
                ham: 20
            }

        }

    ]
}

