import React from 'react' 

export default function AlertInput(props) {
    const [value, setValue] = React.useState('')

    const showText = (e) => {
        setValue(e.target.value)
    }

    const callAlert = () => {
        alert(value)
        setValue('')
    } 

    return (
        <>
            <input
                onChange={showText}
                value={value} />
            <button
                onClick={callAlert}
            >
                alert
            </button>
        </>
    )
}