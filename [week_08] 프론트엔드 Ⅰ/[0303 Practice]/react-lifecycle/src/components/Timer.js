import { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(60);

  useEffect(() => {
    setInterval(() => {
      console.log(time);
      // 비동기 처리 때는 아래와 같이 사용
      setTime((time) => time - 1); // 첫 번째 인자에는 최신값을 유지하는 값, 시점 상관 없이 항상 최신 값 보유
    }, 1000);
  }, []);

  return (
    <div>
      <p>{time}</p>
    </div>
  );
}

export default Timer;
