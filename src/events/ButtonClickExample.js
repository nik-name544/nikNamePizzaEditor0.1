import React from 'react';

export default function ButtonClickExample() {
    const handleClick = (e) => {
        e.preventDefault()

    }

    return (
        <a href="#" onClick={handleClick}>
            Click me
        </a>
    )
}
