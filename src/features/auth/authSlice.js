/*
로그인 / 회원가입 성공 => 사용자 정보를 저장 + 로컬스토리지에 저장
로그아웃 => 사용자 정보 제거 + 로컬스토리지 삭제
로컬스토리지 사용 => 새로고침 후에도 로그인 상태 유지 가능
*/

import { createSlice} from '@reduxjs/toolkit';
import { loginUser, signupUser} from './authAPI';

//사용자가 로그인 하거나 회원가입할때 상태를 관리하고 로그아웃도 처리합니다
//로컬스토리지를 사용하여 사용자의 정보를 브라우저에 저장합니다

//초기화
const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    //로그인한 사용자 정보 없으면 null,
    status:'idle',//로그인 회원가입 상태
    error:null,//에러 메세지 저장용
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        logout: (state) => {//로그아웃 처리
            state.user = null;//로 사용자 정보를 제거
            localStorage.removeItem('user');
            //로컬 스토리지에서도 제거
        },
    },
    extraReducers:(builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            //로그인 유저 또는 사인업 유저 성공시 
           state.user = action.payload;//유저 상태에 사용자 정보저장
           state.status = 'succeeded';//상태변경
           localStorage.setItem('user', JSON.stringify(action.payload));
           //사용자 정보를 로컬스토리지에 저장 (새로고침해도 유지됨)
        }).addCase(signupUser.fulfilled, (state, action) =>  {
        state.user = action.payload;//유저 상태에 사용자 정보저장
           state.status = 'succeeded';//상태변경
           localStorage.setItem('user', JSON.stringify(action.payload));
        })
    }
})

export const {logout} = authSlice.actions;
//로그아웃 액션 내보냄 (컴포넌트에서 사용가능)
export default authSlice.reducer;
//리듀서를 배보내서 store에 등록가능

/*
Async
1)콜백 2)Asynchronous 
3)Promises
Pending 보류
Fulfilled 결과값
Rejected 거부(오류객체)

4) Async / await
*/