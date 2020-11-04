import React from 'react';
import ParentComponent from './ParentComponent'
import ChildComponent from './ChildComponent'

export default class extends React.Component {
    state = {
        numOfItem: 0,
        children: []
    }

    onAddChild = () => {
        this.setState({
            numOfItem: this.state.numOfItem + 1
        });
    }

    onDelete = () => {
        let some = [...this.state.children]  
        
        this.setState(prevState => ({
            children: prevState.children.filter()
        }));
        console.log()
    }
    // onDelete = (children, i) => {
    //     let some = [...children] 
    //     some[i].splice(this, 1)
    //     console.log([...this.state.children])
    //     // this.setState(prevState => ({
    //     //     some: prevState.some.filter(el => el.i)
    //     //   }));
    // }

    render() {
        let children = [...this.state.children]

        for (var i = 0; i < this.state.numOfItem; i++) {
            let e = this.state.numOfItem 
            children.push(<ChildComponent key={i} number={i} />)
        };


        return (
            // <ParentComponent addChild={this.onAddChild} onDelete={(props)=>{this.onDelete}} > 
            <ParentComponent addChild={this.onAddChild} onDelete={()=>this.onDelete(this.state.children.id)}>
                {children}
            </ParentComponent>
        );
    }


}

