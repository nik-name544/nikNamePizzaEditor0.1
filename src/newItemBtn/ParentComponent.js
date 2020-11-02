import React from 'react';



const ParentComponent = (props) => {
    return (
        <>
            <button onClick={props.addChild}>Add Another Child Component</button>
            <div>
                {props.children}
            </div>
        </>
    )

}

export default ParentComponent