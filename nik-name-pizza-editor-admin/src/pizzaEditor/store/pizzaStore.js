import { observable, action } from 'mobx';

class PizzaStore {
    @observable pizzaData = pizzaDataStore()

    @observable defoultP = 225 

    @observable sum = this.defoultP + this.defoultSauce

    @observable defoultSauce = 0

    @action total(newP) {
        this.defoultP += newP
    }
 
    @action radioTotal(sauce) { 
        this.defoultSauce = this.pizzaData[0].sauceP[sauce]
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

        },
        {
            tomato: false,
            mushrooms: false,
            pepper: false,
            size30: true,
            size35: false,
            thin: true,
            fluffy: false,
            tomatoSauce: false,
            whiteSauce: false,
            spicySauce: false,
            mozzarella: false,
            cheddar: false,
            dorBlue: false,
            bacon: false,
            pepperoni: false,
            ham: false,
        }, 
    ]
}

