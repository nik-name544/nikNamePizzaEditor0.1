import React from 'react';

export default function FormExample() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(e.target.name.value)
    }


    return (
        <>
            <form
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    name="name"
                />
                <button>
                    Submit
                    </button>
            </form>
        </>
    )
}
