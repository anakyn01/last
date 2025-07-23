import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
    //함수에 객체를 넘기면서 스토어를 만듬
    reducer:{
        counter:counterReducer
    }
})