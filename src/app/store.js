import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({//store설정
    //함수에 객체를 넘기면서 스토어를 만듬
    reducer:{
        counter:counterReducer,
        auth:authReducer,
    }
})