import React from 'react';

export default function KeyboardExample() { 

    React.useEffect(()=>{
        const onKeyUp = (e)=>{
            console.log(e.key)
        }

        window.addEventListener('keyup', onKeyUp)

        return ()=>{
            window.removeEventListener('keyup', onKeyUp)
        }
    }, [])

    return null
}
 