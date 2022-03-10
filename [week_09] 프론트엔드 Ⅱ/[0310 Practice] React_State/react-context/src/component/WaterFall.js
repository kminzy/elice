function Comp3() {
  return <div>App에서 부터 전달 받은 값 </div>;
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
