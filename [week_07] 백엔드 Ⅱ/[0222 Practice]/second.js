const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/user");

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

app.listen(3000, () => {
  console.log("3000 port listen");
});