const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const User = require('./model');

app.use(express.json()); // body는 JSON 형태로 받을 수 있다.
// 페이지 변환 없는 fetch 방식은 json 형태로만 받는다
app.use(express.urlencoded({
  extended: true
})); // form data를 허용

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
});


function middle1(req, res, next) {
  req.params.temp = "중간에 낀 값";
  console.log("중간과정");
  next();
}

app.use(middle1);

app.get('/middle', (req, res) => {
  console.log("마무리 >>> ", req.params.temp);
  res.send('Hello');
});

app.get('/middle2', (req, res) => {
  res.send('middle2');
});

app.post('/login', (req, res) => {
  const {
    id,
    pw
  } = req.body;
  // mongoDB find == 배열 메소드 filter와 같음 => 배열을 반환
  // mongoDB findOne == 배열 메소드 find => 요소를 반환
  User.findOne({
      id: id,
    })
    .then((result) => {
      console.log(result);
      if (result.pw === pw) {
        res.send({
          status: "로그인 성공",
        });
      } else {
        res.send({
          status: "비밀번호 틀림",
        })
      }
    })
    .catch((err) => {
      res.send({
        status: "아이디가 없음",
      })
    });
});

app.post('/register', (req, res) => {

  const {
    id,
    pw
  } = req.body;
  const newUser = new User({
    id,
    pw
  });
  newUser.save()
    .then((v) => {
      res.send({
        status: "회원가입 성공"
      })
    })
    .catch((e) => {
      res.send({
        status: "회원가입 실패"
      })
    });
});

app.listen(3000, () => { // 서버 실행 후 mongoDB로 연결
  console.log('3000 port listen!');

  mongoose.connect('mongodb://localhost:27017/elice', (err) => {
    console.log("MongoDB Connect")
  });
});