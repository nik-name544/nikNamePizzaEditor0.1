import React  from 'react'


const CounterFunc = () => {
    const [count, setCount] = React.useState(0)

    const incerement = () => {
        setCount(count + 1)
    }

    return (
        <>
            <button onClick={incerement}>
                CounterFunc+
            </button>
            <hr />
            <strong>
                {count}
            </strong>
        </>
    )
}

export default CounterFunc