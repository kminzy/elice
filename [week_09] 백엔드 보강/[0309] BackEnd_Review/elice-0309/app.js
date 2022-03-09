const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/data", (req, res) => {
  fs.readFile("data.json", "utf-8", (err, data) => {
    const _data = JSON.parse(data);
    console.log(_data);
    res.send(_data);
  });
});

// 클라이언트에서 오는 모든 정보는 req에 담겨있다.
app.get("/data/:id", (req, res) => {
  fs.readFile("data.json", "utf-8", (err, data) => {
    const _data = JSON.parse(data);
    const findData = _data.find(
      (element) => element.id === Number(req.params.id)
    );
    console.log(findData);
    res.send(findData);
  });
});

app.post("/data", (req, res) => {
  fs.readFile("data.json", "utf-8", (err, data) => {
    const _data = JSON.parse(data);

    _data.push(req.body);

    fs.writeFile("data.json", JSON.stringify(_data, null, 5), (err, data2) => {
      res.send(_data);
    });
  });
});

app.delete("/data/:id", (req, res) => {
  fs.readFile("data.json", "utf-8", (err, data) => {
    let _data = JSON.parse(data);

    _data = _data.filter((elem) => elem.id !== Number(req.params.id));

    fs.writeFile("data.json", JSON.stringify(_data, null, 5), (err, data2) => {
      res.send(_data);
    });
  });
});

app.listen(3000, () => console.log("listen 3000"));
