import React, { useEffect, useRef, useState } from 'react';

const Component = () => {
    const [count , setCount] = useState(0);

    const componentRef = useRef(true);
    useEffect(() => {
        return () => {
            componentRef.current=false;
        }
    });


    const fetch = () =>{
        setTimeout(() => {
            if (componentRef.current) {
                setCount(count+1);
            }
        }, 2000);
    }
    return (
        <div>
            <h1>Component counter: {count}</h1>
            <button onClick={fetch}>Fetch</button>
        </div>
    )
}

export default Component;