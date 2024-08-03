import { configureStore } from "@reduxjs/toolkit";
import { myReducer } from "./reducer";

const store = configureStore({
    reducer: {
        demoReducer: myReducer
    }
});

export default store;  