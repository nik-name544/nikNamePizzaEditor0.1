import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Counter extends Component {
    state = { count: 0 }

    increment = () => {
        this.setState(state => ({
            count: state.count + 1
        }))
    }


    render() {
        const { count } = this.state


        return (
            <button
                onClick={this.increment}
            >
                count: {count}
            </button>
        )
    }
}