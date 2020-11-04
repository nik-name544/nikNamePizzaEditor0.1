import React from 'react';

export default function FirstLastName() {
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [submited, setSubmited] = React.useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmited(true) 
    }

    const changeValue = (e) => {
        setFirstName(e.target.value)
    }

    const changeValue1 = (e) => {
        setLastName(e.target.value)
    }

    if (submited) {
        return <p>{'hello' + ' ' + firstName + ' ' + lastName} </p>
    } else {
        return (
            <>
                <form onSubmit={handleSubmit}>
                    <input
                        value={firstName}
                        type="text"
                        name="firstName"
                        onChange={changeValue}
                        placeholder="First Name"
                    />
                    <br />
                    <input
                        value={lastName}
                        type="text"
                        name="lastName"
                        onChange={changeValue1}
                        placeholder="Last Name"
                    />
                    <br />
                    <button>send</button>
                </form>
            </>
        )
    }
}