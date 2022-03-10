import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Data from "./component/Data";
import WaterFall from "./component/WaterFall";

import { createContext, useState } from "react";

export const StateContext = createContext();

function App() {
  const [value, setValue] = useState(0);

  return (
    <StateContext.Provider value={{ value, setValue }}>
      <div className="App">
        <Header />
        <Data />

        <WaterFall num={10} />
      </div>
    </StateContext.Provider>
  );
}

export default App;
