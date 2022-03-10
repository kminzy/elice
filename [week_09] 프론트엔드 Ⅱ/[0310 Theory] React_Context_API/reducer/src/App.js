import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function reset() {
    setCount(0);
  }

  function decrease() {
    setCount(count - 1);
  }
  return (
    <div>
      <h1>Counter</h1>
      <input type="button" value="+" onClick={increase}></input>
      <input type="button" value="0" onClick={reset}></input>
      <input type="button" value="-" onClick={decrease}></input>
      <div>{count}</div>
    </div>
  );
}

export default App;
