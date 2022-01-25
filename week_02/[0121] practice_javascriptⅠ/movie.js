// innerHTML로 가져오기
let response = document.body.innerHTML;

//response.split('<div>')[1].split('제목: ')[1].split('<')[0]
//response.split('<div>')[2].split('제목: ')[1].split('<')[0]
//response.split('<div>')[3].split('제목: ')[1].split('<')[0]

let elements = response.split('<div>')
elements.splice(0,1);

elements.map((item) => {
    let _name = item.split('제목: ')[1].split('<')[0];
    let _rate = item.split('평점: ')[1].split('<')[0];
    let _summary = item.split('줄거리: ')[1].split('<')[0];
    return {
        name: _name,
        rate: _rate,
        summary: _summary,

    };

});




// querySelector로 가져오기
function getMovieName() {
  let result = [];
  for(let i = 2;i<10;i++) {
  const name = document.querySelector(`body > div:nth-child(${i}) > h2`);
      if(name === null) break;
      result.push(name.innerText);
  }
      return result;
  }
  
  function getMovieRating() {
  let result = [];
  for(let i = 2;i<10;i++) {
  const name = document.querySelector(`body > div:nth-child(${i}) > p.rating`);
      if(name === null) break;
      result.push(name.innerText);
  }
      return result;
  }
  
  function getMovieSummary() {
  let result = [];
  for(let i = 2;i<10;i++) {
  const name = document.querySelector(`body > div:nth-child(${i}) > p.summary`);
      if(name === null) break;
      result.push(name.innerText);
  }
      return result;
  }
  // 데이터들 가져오기
  const names = getMovieName()
  const ratings = getMovieRating();
  const summarys = getMovieSummary();
  
  // 3개 배열 합치기
  let arr = [];
  for(let i = 0;i<names.length;i++) {
      let obj = {
          name: names[i],
          rating: ratings[i],
          summary: summarys[i],
      }
      arr.push(obj);
  }
  
  // 배열에서 불필요한 부분들 제거
  let result = arr.map((item) => {
      return {
          name: item.name.split("제목: ")[1],
          rating: parseFloat(item.rating.split("평점: ")[1]),
          summary: item.summary.split("줄거리: ")[1],
      }
  });
  
  console.log(result);