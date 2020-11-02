import React from 'react';
import ParentComponent from './ParentComponent'
import ChildComponent from './ChildComponent'

export default class extends React.Component {
    state = {
        numOfItem: 0
    }

    onAddChild = () => {
        this.setState({
            numOfItem: this.state.numOfItem + 1
        });
    }

    render() {
        const children = []

        for (var i = 0; i < this.state.numOfItem; i++) {
            children.push(<ChildComponent key={i} number={i} />)
        };

        return (
            <ParentComponent addChild={this.onAddChild}>
                {children}
            </ParentComponent>
        );
    }


}

