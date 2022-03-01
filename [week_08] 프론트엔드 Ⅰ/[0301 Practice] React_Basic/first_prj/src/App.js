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

function App() {
  const [count, setCount] = useState(0); // count = 100

  // count = 100
  // count = "Hello World";

  const [text, setText] = useState(""); //

  // setState 값을 덮어씌우는 방식.

  // props, state << 절대 읽기 값은 바꾸면 안됨.

  return (
    <div className="App">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)} // ? setText에 의해 렌더링이 발생
      />
      <button>추가</button>

      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </button>
      {/** a tag */}
      {/** div tag */}
      {/** h1 tag */}
    </div>
  );
}

export default App;

// 유에서 유를 창조 => map (리액트에선 이걸 제일 많이씀)
// 무에서 유를 창조 => for 문
// 유에서 무를 창조 => forEach
