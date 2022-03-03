import { useState, useEffect } from "react";

// CSR => SPA : admin page, 주식 거래 사이트
// SSR => MPA : blog, 카페, 브랜딩 페이지, 화면 변경 시 깜빡임.

// CSR => React => 컴포넌트 시스템 너무 좋은디, 재사용 가능 , 리액트로 SSR 하고싶다.
// Next.js => 너네 React 처럼 짜셈 => SSR로 바꿔줌
// Gatsby.js Next.js 똑같은 기능.
// 처음에 들어갈 떈 SSR => 한번 들어가고 나면 CSR => SSG

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
      1+2는
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
