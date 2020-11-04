import React from 'react'
import ReactDOM from 'react-dom'

export default function Timer(props) {
    const [tick, setTick] = React.useState(0)
    React.useEffect(() => {
        const timer = setInterval(() => {
            setTick(tick => tick + 1)
        }, 1000);

        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <>

            <div>
                tick: {tick}
            </div>
        </>
    )
}