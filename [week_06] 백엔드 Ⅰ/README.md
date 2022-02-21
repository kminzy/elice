# 6주차 배운 내용 정리

## 1. Express 시작하기
```js
const express = require('express') // express를 사용하겠다

const app = express() // express 기능을 하는 객체 생성

app.get('/', (req, res) => { // default 주소, 접속 시 서비스할 내용
  res.send('Hello, world')
})
// req: request(요청), 사용자의 브라우저 정보, 쿼리(주소창), 로그인정보
// res: response(응답), 사이트 내용 html

app.listen(3000, () => {
  console.log('3000번 포트에서 웹서버를 실행중입니다...')
}) // app.listen(포트번호, 콜백함수)
```