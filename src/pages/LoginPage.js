import { useState } from "react"; //상태관리 훅
//컴포넌트 내에서 상태관리 
import { useDispatch, useSelector } from "react-redux";
//디스패치 및 상태조회
import { loginUser } from '../features/auth/authAPI';
//비동기 로그인 API호출 액션
import { useNavigate} from 'react-router-dom';
//로그인 성공시 페이지 이동을 위해서
/*
일반적인 => npm i -D react-router-dom
최신 => npm i -D react-router-dom@latest
*/

export default function LoginPage(){
    //컴포넌트 상태 및 리덕스 훅 설정
//로그인 폼의 이메일, 비밀번호 상태관리
const[form, setForm] = useState({email:'', password:'' });
//리덕스 액션을 호출하는 함수
const dispatch = useDispatch();
const navigate = useNavigate();
//리덕스 스토어 내에서 auth slice의 상태 로그인 진행 상태와 에러 메세지를 가져옴
const { status, error } = useSelector((state) => state.auth);

const handleSubmit = async (e) => {
    e.preventDefault();//폼 제출시에 기본동작 방지
    try{
/*
loginUser액션을 디스패치하여 로그인 시도
unwrap() 메서드는 Redux Toolkit의 createAsyncThunk 결과에서 
성공 또는 실패를 바로 받아올 수 있게 해줌.
*/
await dispatch(loginUser(form)).unwarp();
navigate('/');//로그인 성공시에 메인페이지로 이동
    }catch(err){//실패시 에러 메세지를 경고창으로 표시
        alert(err.message);
    }
}
}