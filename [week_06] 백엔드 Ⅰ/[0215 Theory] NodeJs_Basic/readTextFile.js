// require 내부에 모듈 이름 작성
const fs = require('fs');

console.log('프로그램 시작...');

let data = fs.readFileSync('./news.txt');

let dataString = data.toString();

console.log(dataString);

console.log('--------------------------------------------');

console.log(dataString.slice(0, 100));