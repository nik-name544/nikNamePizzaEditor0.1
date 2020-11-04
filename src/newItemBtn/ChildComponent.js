import React from 'react';

const ChildComponent = (props) => {
    // console.log(props.children)
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