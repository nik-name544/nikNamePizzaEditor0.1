import React from 'react';



const ParentComponent = (props) => {
    return (
        <>
            <button onClick={props.addChild}>Add Another Child Component</button>
            <div>
            {/* <div onDoubleClick={()=>{props.children.splice(this, 1)}}> */}
                {props.children}
            </div>
        </>
    )

}

export default ParentComponent