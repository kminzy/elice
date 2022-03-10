import { useContext } from "react";
import { StateContext } from "../App";

function Data() {
  const { value } = useContext(StateContext);

  return (
    <div>
      데이터 컴포넌트
      <p>헤더에서 설정한 값 : {value}</p>
    </div>
  );
}

export default Data;
