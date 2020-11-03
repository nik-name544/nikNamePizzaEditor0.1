import React from 'react'; 

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

    handleDeleteElement = (id )=> {
        this.setState(prevState => ({
            elements: prevState.elements.filter(el => el.id != id)
        }));
    };

    render() {
        let elements = this.state.elements.map((item, i) => {
            return (
                <div key={item.id}>
                    <p onDoubleClick={()=>this.handleDeleteElement(item.id)}>
                    {item.id}: hello i'm item {i + 1}
                    </p>
                </div>
            )
        }) 
        return (
            <>
                <button onClick={this.onAddChild}>here you can click</button>
                <p>{elements}</p>
            </>
        )
    }
}