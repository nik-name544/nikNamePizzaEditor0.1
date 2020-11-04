import React from 'react'

export default class ErrorBoundary extends React.Component {

    state = {
        error: null,
        errorInfo: null
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error,
            errorInfo
        })
    }


    render() {
        if (this.state.errorInfo) {
            return (
                <div>
                    <h2>
                        shoto ne tak
                    </h2>
                    <details style={{ whiteSpace: "pre-wrap" }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            )
        }
        return this.props.children
    }
}