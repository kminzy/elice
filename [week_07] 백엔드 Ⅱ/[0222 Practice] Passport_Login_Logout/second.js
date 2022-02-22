const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/user");
const { PythonShell } = require('python-shell');
const path = require('path');


mongoose
  .connect("mongodb+srv://admin:1234@cluster0.p1xn6.mongodb.net/elice")
  .then(async () => {
    console.log("DB 연결 성공");
    try {
      const user = new User({
        username: "elice",
        password: "1234",
      });
      await user.save();

      const user2 = new User({
        username: "elice2",
        password: "5678",
      });
      await user2.save();
    } catch (e) {
      console.log("중복된 데이터 입니다.");
    }
  })
  .catch((e) => {
    console.log("DB 연결 실패", e);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/run_code', (req, res) => {
  const { code } = req.body;
  if(code === undefined) {
    res.send({
      status: "fail",
      result: "결과 없음",
    });
  }

  PythonShell.runString(code, null, (err, result) => {
    console.log(result);

    res.send({
      lang: "Python",
      result,
    });
  });
})

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const userData = await User.findOne({
    username,
  });

  if (userData === null) {
    res.send('아이디 없음');
  }
  else if (userData.password === password) {
    res.send('로그인 성공');
  }
  else {
    res.send('비밀번호 틀림');
  }
  
});

app.get("/val/:value", (req, res) => {
  // params, query string
  res.send("Hello World" + req.params.value);
});

app.get("/search", (req, res) => {
  const { name } = req.query;
  res.send("전달 받은 값" + name);
});

app.post("/search", (req, res) => {
  res.send({
    status: "succ",
    value: req.body.data,
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
})

app.listen(3000, () => {
  console.log("3000 port listen");
});