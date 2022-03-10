import { useContext } from "react";
import { textState } from "../atom/textState";
import { useRecoilState } from "recoil";

function Data() {
  //const { value } = useContext(StateContext);
  const [text, setText] = useRecoilState(textState);

  return (
    <div>
      데이터 컴포넌트
      <p>헤더에서 설정한 값 : {text}</p>
    </div>
  );
}

export default Data;
