import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Data from "./component/Data";
import WaterFall from "./component/WaterFall";
import { createContext, useState } from "react";

import { RecoilRoot, atom } from "recoil";

//export const StateContext = createContext();



function App() {
  //const [value, setValue] = useState(0);

  return (
    <RecoilRoot>
      <div className="App">
        <Header />
        <Data />

        <WaterFall num={10} />
      </div>
    </RecoilRoot>
  );
}

export default App;
