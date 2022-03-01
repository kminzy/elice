import logo from "./logo.svg";
import "./App.css";
import "./Custom.css";

import React, { useState } from "react";

const data = ["apple", "banana", "orange"];

// props는 읽기 전용
function Title({ value, className }) {
  // 여기 영역은 렌더링이 될 때 실행되는 영역
  // 여러가지 계산이 가능함.

  return <h1 className={className}>{value}</h1>; // 실제 렌더링 되는 부분
}

function TodoList({ data, setArr }) {
  return (
    <div>
      {data.map((v) => (
        <>
          <li key={`${v}-key`}>{v}</li>
          <button
            onClick={() => {
              setArr(data.filter((f) => f !== v));
            }}
          >
            삭제
          </button>
        </>
      ))}
    </div>
  );
}

// ! 자식 컴포넌트에서 부모 컴포넌트 state를 바꾸려면 항상 props로 관리를 해야한다.
function TodoInput({ text, setText, arr, setArr }) {
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)} // ? setText에 의해 렌더링이 발생
      />
      <button
        onClick={() => {
          // * React : map 새로운 배열 반환, reduce, filter 다 새로운 배열 반환
          // * spread 연산자 역시 새로운 배열 반환
          // * setState 할때는 항상 deep copy
          //   const newArr = arr.slice(); // arr을 깊은 복사 (= [...arr])
          //   newArr.push(text);
          //   setArr(newArr);
          setArr([...arr, text]); // ! 자기 자신한테 연관되는 메소드는 쓰지 말자. ex) push
          setText("");
        }}
      >
        추가
      </button>
    </>
  );
}

function Todo() {
  const [text, setText] = useState(""); //
  const [arr, setArr] = useState([]);

  return (
    <>
      <TodoInput text={text} setText={setText} arr={arr} setArr={setArr} />
      {/**
       * 자식의 자식의 자식에서 증조 컴포넌트 바꾸려면 계속 props 전달 << React의 최대 단점
       * 이건 해결하려면 어렵기 때문에 Context, Redux 같은 전역 상태 라이브러리를 써야한다.
       */}
      <TodoList data={arr} setArr={setArr} />
    </>
  );
}

function App() {
  // count = 100
  // count = "Hello World";

  // setState 값을 덮어씌우는 방식.
  // props, state << 절대 읽기 값은 바꾸면 안됨.

  return (
    <div className="App">
      {/** a tag */}
      {/** div tag */}
      {/** h1 tag */}
      <Todo />
    </div>
  );
}

export default App;

// 유에서 유를 창조 => map (리액트에선 이걸 제일 많이씀)
// 무에서 유를 창조 => for 문
// 유에서 무를 창조 => forEach
