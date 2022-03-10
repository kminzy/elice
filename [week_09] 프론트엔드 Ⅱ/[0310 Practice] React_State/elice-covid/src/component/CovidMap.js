import React, { useEffect, useState } from "react";
import {
  Seoul,
  Gyeonggi,
  Incheon,
  Gangwon,
  Chungnam,
  Chungbuk,
  Sejong,
  Daejeon,
  Gyeongnam,
  Gyeongbuk,
  Jeonbuk,
  Jeonnam,
  Ulsan,
  Busan,
  Daegu,
  Gwangju,
  Jeju,
} from "../area/all_area";
import axios from "axios";
import { useRecoilState } from "recoil";
import areaState from "../atom/areaState";

const levelColor = ["#fff5f5", "#ffc9c9", "#ff8787", "#fa5252", "#c92a2a"];

function CovidMap() {
  const [covidData, setCovidData] = useState(null);
  // const [selectArea, setSelectArea] = useState(null);
  const [selectArea, setSelectArea] = useRecoilState(areaState);

  useEffect(() => {
    axios
      .get("https://elice-covid.herokuapp.com/covidData")
      .then((response) => {
        setCovidData(response.data.data);
      });
  }, []);

  useEffect(() => {
    console.log("selectArea", selectArea);
  }, [selectArea]);

  if (covidData === null) {
    return <p>Loading ...</p>;
  }
  return (
    <>
      <svg width="700px" height="1000px" viewBox="0 0 800 1200">
        <Seoul
          onClick={(e) => {
            setSelectArea({
              ...covidData[e.target.id],
              name: e.target.id,
            });
          }}
          fill={levelColor[covidData["서울"].level - 1]}
        />
        <Gyeonggi
          onClick={(e) => {
            setSelectArea({
              ...covidData[e.target.id],
              name: e.target.id,
            });
          }}
          fill={levelColor[covidData["서울"].level - 1]}
        />
        <Gangwon
          onClick={(e) => {
            setSelectArea({
              ...covidData[e.target.id],
              name: e.target.id,
            });
          }}
          fill={levelColor[covidData["강원"].level - 1]}
        />
        <Incheon
          onClick={(e) => {
            setSelectArea({
              ...covidData[e.target.id],
              name: e.target.id,
            });
          }}
          fill={levelColor[covidData["인천"].level - 1]}
        />
        <Chungnam
          onClick={(e) => {
            setSelectArea({
              ...covidData[e.target.id],
              name: e.target.id,
            });
          }}
          fill={levelColor[covidData["충남"].level - 1]}
        />
        <Chungbuk
          onClick={(e) => {
            setSelectArea({
              ...covidData[e.target.id],
              name: e.target.id,
            });
          }}
          fill={levelColor[covidData["충북"].level - 1]}
        />
        <Sejong
          onClick={(e) => {
            setSelectArea({
              ...covidData[e.target.id],
              name: e.target.id,
            });
          }}
          fill={levelColor[covidData["세종"].level - 1]}
        />
        <Daejeon
          onClick={(e) => {
            setSelectArea({
              ...covidData[e.target.id],
              name: e.target.id,
            });
          }}
          fill={levelColor[covidData["대전"].level - 1]}
        />
        <Gyeongnam
          onClick={(e) => {
            setSelectArea({
              ...covidData[e.target.id],
              name: e.target.id,
            });
          }}
          fill={levelColor[covidData["경남"].level - 1]}
        />
        <Gyeongbuk
          onClick={(e) => {
            setSelectArea({
              ...covidData[e.target.id],
              name: e.target.id,
            });
          }}
          fill={levelColor[covidData["경북"].level - 1]}
        />
        <Jeonbuk
          onClick={(e) => {
            setSelectArea({
              ...covidData[e.target.id],
              name: e.target.id,
            });
          }}
          fill={levelColor[covidData["전북"].level - 1]}
        />
        <Jeonnam
          onClick={(e) => {
            setSelectArea({
              ...covidData[e.target.id],
              name: e.target.id,
            });
          }}
          fill={levelColor[covidData["전남"].level - 1]}
        />
        <Ulsan
          onClick={(e) => {
            setSelectArea({
              ...covidData[e.target.id],
              name: e.target.id,
            });
          }}
          fill={levelColor[covidData["울산"].level - 1]}
        />
        <Busan
          onClick={(e) => {
            setSelectArea({
              ...covidData[e.target.id],
              name: e.target.id,
            });
          }}
          fill={levelColor[covidData["부산"].level - 1]}
        />
        <Daegu
          onClick={(e) => {
            setSelectArea({
              ...covidData[e.target.id],
              name: e.target.id,
            });
          }}
          fill={levelColor[covidData["대구"].level - 1]}
        />
        <Gwangju
          onClick={(e) => {
            setSelectArea({
              ...covidData[e.target.id],
              name: e.target.id,
            });
          }}
          fill={levelColor[covidData["광주"].level - 1]}
        />
        <Jeju
          onClick={(e) => {
            setSelectArea({
              ...covidData[e.target.id],
              name: e.target.id,
            });
          }}
          fill={levelColor[covidData["제주"].level - 1]}
        />
      </svg>
    </>
  );
}
export default CovidMap;
