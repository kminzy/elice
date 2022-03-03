import { useState, useEffect } from "react";

function Update() {
  const [text, setText] = useState("");
  const [answer, setAnswer] = useState("정답이 아닙니다.");

  useEffect(() => {
    console.log("answer값 변형: ", answer);
  }, [answer]); // 텍스트가 변화했을 때 실행되는 함수

  useEffect(() => {
    if (text === "3") {
      console.log("정답");
      setAnswer("정답입니다");
    } else {
      setAnswer("정답이 아닙니다.");
    }
  }, [text]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <p>{answer}</p>
    </div>
  );
}

export default Update;
