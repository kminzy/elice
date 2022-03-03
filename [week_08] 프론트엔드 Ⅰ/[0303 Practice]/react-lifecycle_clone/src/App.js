import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { Comp, Comp2 } from "./components/Comp";

// App 렌더링 2번
function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setToggle(!toggle)}>Click Me</button>
      {!toggle ? <Comp /> : <Comp2 />}
      {/* {!toggle && <Comp />} */}
    </div>
  );
}

export default App;
