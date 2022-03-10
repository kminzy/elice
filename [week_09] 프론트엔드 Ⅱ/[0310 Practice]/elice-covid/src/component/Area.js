import { useRecoilState } from "recoil";
import areaState from "../atom/areaState";

function AreaInfo({ name, level, num }) {
  return (
    <>
      <p>선택한 지역 : {name}</p>
      <p>거리두기 단계 : {level}</p>
      <p>확진자 수 : {num}</p>
    </>
  );
}

function Area() {
  const [selectArea, setSelectArea] = useRecoilState(areaState);

  return (
    <div>
      {selectArea === null ? (
        <p>선택 지역 없음</p>
      ) : (
        <AreaInfo
          name={selectArea.name}
          num={selectArea.num}
          level={selectArea.level}
        />
      )}
    </div>
  );
}

export default Area;
