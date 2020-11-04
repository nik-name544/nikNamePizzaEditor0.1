import React from 'react';

export default function InputExample() {
    const [text, setText] = React.useState('')

    const onInputChange = (e) => {
        setText(e.target.value)
    }

    return (
        <input
            value={text}
            onChange={onInputChange}
        />
    )
}
