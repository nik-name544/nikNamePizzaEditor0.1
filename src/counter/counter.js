import React from 'react'

export default class Counter extends React.Component {
    state = { count: 0 }
    increment = () => {
        this.setState(state => ({
            count:  state.count + 1
        }))
    }

    render() {
        return (
            <>
            <button
                onClick={this.increment}
            >
                Count+
                
            </button> 
            <hr/>
            <strong>
                {this.state.count}
            </strong>
            </>
        )
    }
}

