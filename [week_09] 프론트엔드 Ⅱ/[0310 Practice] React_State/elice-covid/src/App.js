import logo from "./logo.svg";
import "./App.css";

import { RecoilRoot } from "recoil";

import CovidMap from "./component/CovidMap";
import Area from "./component/Area";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Area />
        <CovidMap />
      </div>
    </RecoilRoot>
  );
}

export default App;
