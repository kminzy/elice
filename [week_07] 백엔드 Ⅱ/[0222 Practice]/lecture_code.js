const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/user");
const { PythonShell } = require("python-shell");
const path = require("path");
// <username>:<password>
// admin:1234

mongoose
  .connect("mongodb+srv://admin:1234@cluster0.yfbio.mongodb.net/elice")
  .then(async () => {
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
      console.log("데이터 이미 있음");
    }
  })
  .catch((e) => {
    console.log("DB 연결 실패", e);
  });

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.post("/code_run", (req, res) => {
  const { code } = req.body;
  if (code === undefined) {
    res.send({
      status: "fail",
      result: "결과 없음",
    });
  }
  PythonShell.runString(code, null, (err, result) => {
    console.log(result);

    res.send({
      status: "succ",
      lang: "Python",
      result: result,
    });
  });
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const userData = await User.findOne({
    username: username,
  });
  if (userData === null) {
    res.send("아이디 없음");
  } else if (userData.password === password) {
    res.send({
      status: "succ",
    });
  } else {
    res.send("비밀번호 틀림");
  }
});

app.get("/succ", (req, res) => {
  res.send("<h1>로그인 성공</h1>");
});

app.get("/fail", (req, res) => {
  res.send("<h1>로그인 실패</h1>");
});

// params, query string
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(3000, () => console.log("3000 port listen"));
