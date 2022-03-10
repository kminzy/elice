import React, { useCallback, useMemo, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as tf from "@tensorflow/tfjs";
import CanvasDraw from "react-canvas-draw";

async function predict(canvas) {
  const model = await tf.loadLayersModel(
    "http://localhost:3001/model/model.json"
  ); // 서버에서 학습된 모델 가져오기

  // 그림 읽기
  let tensor = await tf.browser.fromPixels(canvas, 1);

  // 그림 크기 인공지능에 넣을 수 있게 사이즈 조정
  tensor = tf.image.resizeBilinear(tensor, [28, 28], false);
  tensor = tensor.reshape([1, 28, 28, 1]);
  //let image_b = await Image.load(image);

  const pre = model.predict(tensor);
  return pre.argMax([-1]).dataSync()[0]; // 확률 제일 큰 것을 가져온다
}

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Comp1 = React.memo(function () {
  console.log("렌더");
  return <div>자식</div>;
});

function App() {
  const [picture, setPicture] = useState(null);
  const [predictNum, setPredictNum] = useState(-1);

  const handleClear = () => picture.clear();

  const handlePredict = useCallback(() => {
    predict(picture.canvas.drawing).then((res) => {
      setPredictNum(res);
    });
  }, [picture]); // 함수 정의에 대한 최적화

  const sum = useMemo(() => {
    return num.reduce((a, b) => a + b);
  }, []); // 계산에 대한 최적화

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {sum}

      <div>
        Count <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>

      <Comp1 />

      <CanvasDraw onChange={(e) => setPicture(e)} />
      <button onClick={handleClear}>지우기</button>
      <button onClick={handlePredict}>이 숫자는 뭘까요 ?</button>
      <p>결과 값: {predictNum === -1 ? "" : predictNum}</p>
    </div>
  );
}

export default App;
