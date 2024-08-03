import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    x: 0
};

export const myReducer = createReducer(initialState, (builder) => {
    builder
        .addCase('increment', (state) => {
            state.x += 1;
        })
        .addCase('decrement', (state) => {
            state.x -= 1;
        })
        .addCase('incrementByValue', (state, action) => {
            state.x += action.payload;
        })
});