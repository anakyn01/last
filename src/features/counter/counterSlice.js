import {createSlice} from '@reduxjs/toolkit';

const initialState = {//초기 상태
    value: 0
};

const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers:{
        increment:(state) => { state.value += 1},
        decrement:(state) => { state.value -= 1},
        reset: (state) => {state.value = 0}
    }
});

export const {increment, decrement, reset} = counterSlice.actions;
//액션 생성자 컴포넌트등에 액션을 보낼때 사용
export default counterSlice.reducer;
//기본 내보내기 => store에 연결되어 상태변경을 처리