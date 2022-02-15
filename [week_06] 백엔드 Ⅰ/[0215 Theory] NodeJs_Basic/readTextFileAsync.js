const fs = require('fs');

console.log('시작...')

fs.readFile('./news.txt', (err, data) => {
  if (err) {
    console.log("error...");
  }
  console.log('1번 읽어오기', data.toString());
});

fs.readFile('./news.txt', (err, data) => {
  if (err) {
    console.log("error...");
  }
  console.log('2번 읽어오기', data.toString());
});

fs.readFile('./news.txt', (err, data) => {
  if (err) {
    console.log("error...");
  }
  console.log('3번 읽어오기', data.toString());
});