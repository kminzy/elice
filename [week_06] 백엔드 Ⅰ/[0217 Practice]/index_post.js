const express = require('express');
const app = express();
const data = require('./movieData');
const path = require('path');

app.use(express.json()); // body는 JSON 형태로 받을 수 있다.

function movieSearch(name) {
  return data.movieData.filter(v => {
    return v.name.includes(name)
  });
}

app.get('/search', (req, res) => {
  res.send('Search');
});

app.post('/search', (req, res) => {
  const name = req.body.name;
  const result = movieSearch(name);

  res.send({
    result
  });
});

/*
POST http://localhost:3000/search
필요 헤더 JSON
필요 바디 name: 영화이름
*/

app.post('/sum', (req, res) => {
  const arr = req.body.arr;

  console.log(req.body);
  res.send({
    result: arr.reduce((prev, curr) => prev + curr),
  });
});

app.listen(3000, () => {
  console.log('3000 port listen!');
});