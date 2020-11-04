import React from 'react';
import Button from '@material-ui/core/Button';

export default class extends React.Component {
    state = {
        numOfItem: 0,
        elements: [],
    };

    onAddChild = () => {
        this.setState({
            numOfItem: this.state.numOfItem + 1,

        });

        const newArray = [...this.state.elements, { id: this.state.numOfItem }]

        this.setState({
            elements: newArray
        })
    }

    handleDeleteElement = (id) => {
        this.setState(prevState => ({
            elements: prevState.elements.filter(el => el.id !== id)
        }));
    };

    render() {
        let elements = this.state.elements.map((item, i) => {
            return (
                <div key={item.id}>
                    <p onDoubleClick={() => this.handleDeleteElement(item.id)}>
                        {item.id}: hello i'm item {i + 1}
                    </p>
                </div>
            )
        })
        return (
            <>
                <Button
                    onClick={this.onAddChild}
                    variant="outlined"
                    color="secondary"
                    style={{ marginBottom: 20}}
                >
                    here you can click
                    </Button>
                <div>
                    {elements}
                </div>
            </>
        )
    }
}