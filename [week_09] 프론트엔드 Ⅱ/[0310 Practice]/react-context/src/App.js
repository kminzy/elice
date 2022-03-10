import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Data from "./component/Data";
import WaterFall from "./component/WaterFall";
function App() {
  return (
    <div className="App">
      <Header />
      <Data />

      <WaterFall num={10} />
    </div>
  );
}

export default App;
