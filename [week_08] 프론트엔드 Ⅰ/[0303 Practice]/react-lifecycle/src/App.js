import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import React from "react";
import { Comp, Comp2 } from "./components/Comp";
import Update from "./components/Update";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./page/index";
import Timer from "./page/timer";
import Header from "./components/Header";
import NotFound from "./page/NotFound";

function App() {
  //   const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        {/* BrowserRouter는 데이터를 관리하는 컴포넌트 */}
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="timer" element={<Timer />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
        <div>Footer</div>
      </BrowserRouter>
      {/* <button onClick={() => setToggle(!toggle)}>Click Me</button> */}
      {/* 조건부 렌더링 */}
      {/* {!toggle ? <Comp /> : <Comp2 />} */}
      {/* 조건부 렌더링 2 */}
      {/* {!toggle && <Comp />} */}
      {/* <Timer sec={5} /> */}

      {/* <Update /> */}
    </div>
  );
}

export default App;
