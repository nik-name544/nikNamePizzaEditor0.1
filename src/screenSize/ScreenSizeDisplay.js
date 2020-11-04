import React, { Component } from 'react'

export default class ScreenSizeDisplay extends Component {
    state = {
        clicked: false
    }

    showScreenSize = () => {
        this.setState(state => ({
            clicked: !state.clicked
        }))
    }

    render() {
        const screenSize = window.screen.availWidth
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column"
                }}
            >
                <p>
                    {this.state.clicked ? 'your screen size is:' + screenSize : 'your screen size is:'}
                </p>
                <button
                    onClick={this.showScreenSize}>
                    {this.state.clicked ? 'neShow' : 'show'}
                </button>
            </div>
        )
    }
}