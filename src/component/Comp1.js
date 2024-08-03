import React from 'react';
import { useDispatch } from 'react-redux';

const Comp1 = () => {
    const dispatch = useDispatch();
    const add = () => {
        dispatch({
            type: 'increment'
        })
    };
    const fiveAdd = () => {
        dispatch({
            type: 'incrementByValue',
            payload: 5
        })
    }
    return (
        <div style={{ backgroundColor: "yellow" }}>
            <h1>Component 1</h1>
            <button onClick={add}>Add</button>
            <br />
            <button onClick={fiveAdd}>add five</button>
        </div>
    )
}

export default Comp1;
