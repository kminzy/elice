const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/val/:value', (req, res) => {
  // params, query string
  res.send('Hello World' + req.params.value);
});

app.get('/search', (req, res) => {
  const { name } = req.query;
  res.send('전달 받은 값' + name);
});

app.post('/search', (req, res) => {
  res.send({
    status: "succ",
    value: req.body.data,
  });
});

app.listen(3000, () => { console.log("3000 port listen") });