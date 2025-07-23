import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

/*
리덕스란 (redux) : 애플리케이션 상태(state)를 전역적으로 관리하는 
자바스크립트 라이브러리인데 주로 리액트와 같이 사용되지만 리액트에 종속되지는 
않는다..

리덕스를 사용하는 이유..
1)복잡한 상태관리 문제 해결
컴포넌트가 많아지면 상태를 부모 - 자식 - 손자 컴포넌트로 계속 전달해서 복잡해진다
- 리덕스를 사용하면 상태를 중앙에서 관리해서 모든 컴포넌트가 쉽게 접근할수 잇다

2)전역상태 공유
로그인 정보, 장바구니 , 테마 설정등과 같은 전역상태는 여러 컴포넌트에 접근해야 한다
- 리덕스를 사용하면 이런 곹오상태를 쉽게 공유할수 있다

3)예측가능한 상태관리
리덕스는 상태가 어떻게 바ㅣ뀌는지 (액션 -> 리듀서 -> 새상태)가 명확히 보이기
때문에 디버깅이나 유지보수가 쉬워요

4)디버깅이 쉽다
Redux DevTools라는 툴로 변화 히스토리를 추적하고 되돌린다

리덕스에 기본개념
Store : 상태가 저장되는 장소
Action : 상태가 어떻게 바꿔야 하는지를 설명하는 객체
Reducer : 액션을 받아 상태를 실제로 어떻게 바꿀지 정의하는 함수

최근에는 zustand, recoil, jotai를 시도함

Context API[데이터를 전역적으로 공유할때 사용] 
컴포넌트가 깊게 중첩될때를 props drilling이라하는데 이걸 피하기 위해 사용
=> 프로바이더(데이터를 공급하는 역활을 한다) 
<MyContext.Provider value={전달할 값}>
</MyContext.Provider>


컨슈머(프로바이더가 전달한 데이터를 사용합니다)
<MyContext.Consumer>
{value => /**}
</MyContext.Consumer>
*/