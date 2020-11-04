import React from 'react'
import Button from '@material-ui/core/Button'; 


export default class Counter extends React.Component {
    state = { count: 0 } 
    increment = () => {
        this.setState(state => ({
            count:  state.count + 1
        }))
    }

    render() { 
        return (
            <div 
                style={{
                    display: "flex",
                    flexDirection: 'column',
                    maxWidth: '150px',
                    alignItems: 'center',
                    margin: '0 auto',
                }}
            >
            <Button
                onClick={this.increment}
                variant="outlined" 
                color="secondary" 
                style={{ marginBottom: 20}}
            >
                Count+
                
            </Button>  
            <strong>
                {this.state.count}
            </strong>
            </div>
        )
    }
}

