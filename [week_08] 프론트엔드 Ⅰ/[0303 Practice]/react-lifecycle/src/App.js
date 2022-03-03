import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import React from "react";
import { Comp, Comp2 } from "./components/Comp";
import Timer from "./components/Timer";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setToggle(!toggle)}>Click Me</button>
      {/* 조건부 렌더링 */}
      {!toggle ? <Comp /> : <Comp2 />}
      {/* 조건부 렌더링 2 */}
      {/* {!toggle && <Comp />} */}
      <Timer sec={5} />
    </div>
  );
}

export default App;
