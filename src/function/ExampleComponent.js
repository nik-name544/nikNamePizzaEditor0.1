import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default function ExampleComponent (props) {
    return (
        <h2>
            {props.text}
        </h2>
    )
}

ExampleComponent.defaultProps = {
    text: "Default message"
  }

ExampleComponent.propTypes = {
    text: PropTypes.string.isRequired
}
