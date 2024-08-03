import React from 'react';
import { useSelector } from 'react-redux';

const Comp4 = () => {
    const value = useSelector(wwe => wwe.demoReducer.x)
    return (
        <div style={{ backgroundColor: "royalblue", width: "50%" }}>
            <h1>Component 1</h1>
            <h3>{value}</h3>
        </div>
    );
}

export default Comp4;
