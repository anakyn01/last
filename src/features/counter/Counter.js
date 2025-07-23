import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './counterSlice';

function Counter(){
const count = useSelector((state) => state.counter.value);
//useSelector를 통해 Redux스토어의 상태중 counter.value를 가져옵니다
const dispatch = useDispatch();//액션을 리덕스에 전달할때 사용하는 함수

return(
    <div style={{textAlign:'center'}}>
        <h1>Redux Counter</h1>
        <h2>{count}</h2>
        <button onClick={() => dispatch(increment())}>+ 증가</button>
        <button onClick={() => dispatch(decrement())}>- 감소</button>
        <button onClick={() => dispatch(reset())}>리셋</button>
    </div>
)
}

export default Counter;