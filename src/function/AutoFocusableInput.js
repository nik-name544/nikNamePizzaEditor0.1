import React from 'react'
import ReactDOM from 'react-dom'

export default function AutoFocusableInput(props) {
    const inputRef = React.useRef()

React.useEffect(()=>{
inputRef.current.focus()

return()=>{
    
}
},[])

    return (
        <>
            <input ref={inputRef} />
        </>
    )
}