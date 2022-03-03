import { useEffect, useState } from "react";

function Timer({ sec }) {
  const [time, setTime] = useState(sec);

  useEffect(() => {
    const timer = setInterval(() => {
      // 비동기 처리 때는 아래와 같이 사용
      setTime((_time) => {
        if (_time === 0) {
          clearInterval(timer);
        }
        return _time - 1;
      }); // 첫 번째 인자에는 최신값을 유지하는 값, 시점 상관 없이 항상 최신 값 보유
    }, 1000);
  }, []);

  return (
    <div>
      <p>{time > 0 ? time : "END"}</p>
    </div>
  );
}

export default Timer;
