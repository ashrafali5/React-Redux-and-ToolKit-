import React from 'react';
import { useDispatch } from 'react-redux';

const Comp2 = () => {
    const dispatch = useDispatch();
    const remove = () => {
        dispatch({
            type:'decrement'
        })
    }

    return (
        <div style={{ backgroundColor: "green" }}>
            <h1>Component 1</h1>
            <button onClick={remove}>remove</button>
        </div>
    );
}

export default Comp2;
