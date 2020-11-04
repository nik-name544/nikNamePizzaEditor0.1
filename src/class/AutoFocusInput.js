import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ErrorBoundary from './ErrorBoundary'

const Input = React.forwardRef((props, ref) => {
    return <input ref={ref}/>
})

export default class AutoFocusInput extends Component {
    textInputRef = React.createRef()

    componentDidMount() {
        this.textInputRef.current.focus() 
    }

    render() {
        return (
            <>
                <Input ref={this.textInputRef} />
                <input ref={this.textInputRef}/>
                <br/>
            </>
        )
    }
}