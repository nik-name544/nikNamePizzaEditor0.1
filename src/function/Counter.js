import React from 'react'
import ReactDOM from 'react-dom'


export default function Counter(props) {
    const [count, setCount] = React.useState(0)

    const plus = () => {
        setCount(count + 1)
    }
    return (
        <button
            onClick={plus}
        >
            Count: {count}
        </button>
    )
}