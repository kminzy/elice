import { useContext } from "react";
import { StateContext } from "../App";

function Comp3() {
  const { value } = useContext(StateContext);

  return <div>App에서 부터 전달 받은 값 {value}</div>;
}

function Comp2() {
  return (
    <div>
      <Comp3 />
    </div>
  );
}

function Comp1() {
  return (
    <div>
      <Comp2 />
    </div>
  );
}

function WaterFall() {
  return (
    <div>
      <Comp1 />
    </div>
  );
}

export default WaterFall;
