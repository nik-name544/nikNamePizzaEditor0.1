import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'


export default class MainComponent extends Component {
    render() {
        const { name, email } = this.props
        return (
            <>
                <div>
                    hello {name}
                </div>
                <div>
                    with email: {email}
                </div>
            </>
        )
    }
}

MainComponent.defaultProps={
    name: 'User Name',
    email:'info@email.com'
}

MainComponent.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}
