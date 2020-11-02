import React from 'react';

export default class extends React.Component {
    state = {
        numOfItem: 0
    }

    addItem = () => {
        this.setState(state => ({
            numOfItem: state.numOfItem + 1
        }))

    }

    // newItem = () => {
    //     const item = []
    //     for (var i = 0; i < this.state.numOfItem; i++) {
    //         item.push(<ChildComponent key={i}>item with num: {i}</ChildComponent>)
    //     }

    // }
 

    render() {
        return (
            <>
                <button
                    onClick={() => this.addItem()}
                >
                    new item
                </button> 
                <p>
                    {this.state.numOfItem}
                </p>
            </>
        )
    }
}