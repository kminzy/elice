const express = require('express');
const app = express();
const data = require('./movieData');
const path = require('path');

function movieSearch(name) {
  return data.movieData.filter(v => {
    return v.name.includes(name)
  });
}

app.get('/search', (req, res) => {
  const name = req.query.name;

  const result = movieSearch(name);
  res.send({
    result,
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/search2/:name', (req, res) => {
  const name = req.params.name;

  const result = movieSearch(name);
  res.send({
    result,
  });
});

app.listen(3000, () => {
  console.log('3000 port listen!');
});