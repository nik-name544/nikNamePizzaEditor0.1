import React from 'react';

const ChildComponent = (props) => {
    return (
        <>
            {"I am new item " + props.number} 
            <div>
                {props.children}
            </div>
        </>

    )
};



export default ChildComponent