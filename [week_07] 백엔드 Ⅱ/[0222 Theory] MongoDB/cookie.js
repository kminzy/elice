const http = require('http');

http.createServer((req, res) => {
  console.log(req.url, req.headers.cookie);
  res.writeHead(200, { 'Set-Cookie': 'mycookie=test' });
  res.end('Welcome to our service!');
})
.listen(8003, () => {
  console.log('8003번 포트에서 웹서버가 실행됩니다.');
});