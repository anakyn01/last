import { createAsyncThunk } from "@reduxjs/toolkit";
//비동기 작업(API요청, 데이터저장등)을 간단하게 처리할수 있게
//도와주는 함수

//회원가입기능
export const signupUser = createAsyncThunk('auth/signup', async(data) =>{
//1) 로컬스토리지에서 기존 사용자 목록을 불러옵니다 없으면 빈 배열
const users = JSON.parse(localStorage.getItem('usres')) || [];
//2) 이미 같은 이메일이 등록되어 잇다면 에러발생 -> '이미 존재하는 사용자'
const exists = users.find((user) => user.email === data.email);
if (exists) throw new Error('이미 이메일이 존재하는데 다시해');
//3) 이메일이 중복되지 않으면 새 사용자를 배열에 추가
users.push(data);
//4) 새사용자 정보를 반환
return data;
});

//로그인 기능 위에 것은  email이 같지 않으면 pass 아이디와 패스워드가 일치해야만 로긴
export const loginUser = createAsyncThunk('auth/login', async ({email, password}) =>{
const users = JSON.parse(localStorage.getItem('users')) || [];
//이메일과 비밀번호가 일치하는 사용자를 찾음
const user = users.find((u) => u.email === email && u.password === password);
if(!user) throw new Error('아이디 또는 비밀번호 가 틀림');
return user;
})