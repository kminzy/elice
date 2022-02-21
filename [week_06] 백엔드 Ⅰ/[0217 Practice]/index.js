const express = require('express');
const app = express();
const path = require('path');

app.use(express.json()); // body는 JSON 형태로 받을 수 있다.
// 페이지 변환 없는 fetch 방식은 json 형태로만 받는다
app.use(express.urlencoded({
  extended: true
})); // form data를 허용

const userData = [{
  id: "elice",
  pw: "1234",
}, ];

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.post('/login', (req, res) => {
  console.log("클라이언트 값", req.body);
  const {
    id,
    pw
  } = req.body; // const id = req.body.id; const pw = req.body.pw;
  const findElement = userData.find((v) => v.id === id);

  if (findElement !== undefined && findElement.pw === pw) {
    // 성공
    res.send({
      status: "succ",
    });
  }

  res.send({
    status: "fail",
  });

});

app.post('/register', (req, res) => {
  const {
    id,
    pw
  } = req.body;
  const newData = {
    id,
    pw,
  }

  userData.push(newData);

  res.send({
    status: "succ",
  });

})


app.listen(3000, () => {
  console.log('3000 port listen!');
});