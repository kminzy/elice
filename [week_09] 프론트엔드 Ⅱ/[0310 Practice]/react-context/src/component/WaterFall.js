function Comp3({ num }) {
  return <div>App에서 부터 전달 받은 값 {num}</div>;
}

function Comp2({ num }) {
  return (
    <div>
      <Comp3 num={num} />
    </div>
  );
}

function Comp1({ num }) {
  return (
    <div>
      <Comp2 num={num} />
    </div>
  );
}

function WaterFall({ num }) {
  return (
    <div>
      <Comp1 num={num} />
    </div>
  );
}

export default WaterFall;
