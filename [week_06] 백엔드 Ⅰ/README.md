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

<br>

## 2. Template Engine
- 서버에서 클라이언트로 보낼 HTML의 형태를 미리 템플릿으로 저장
- 백엔드에서 변수를 담아서 HTML을 만드려고 사용
- 사용자한테 변수를 넘겨서 `사용자 브라우저에서 그 변수를 처리`하기 위해 사용
- 동작 시에 미리 작성된 템플릿에 데이터를 넣어서 완성된 HTML 생성
- `템플릿 작성 문법`과 작성된 템플릿을 `HTML로 변환`하는 기능 제공
- pug, 넌적스, handle-bars

<br>

## 3. MongoDB
- DataBase: 엑셀 파일 하나 => 여러 개의 DB 존재 가능
- Collection: Sheet 하나하나 => 하나의 DB 안에 여러 개의 Collection 존재 가능
- Document: Sheet 내의 셀 하나하나 => 하나의 Collection 안에 여러 개의 Document 존재 가능
- Document는 JSON 형식으로, key와 value로 이루어진 여러 개의 Field들로 이루어져 있다.
- 여러 종류의 DB 중, MongoDB의 Document 형식이 JSON으로 되어 있다 보니 Node.js와 궁합이 잘 맞는다.
- mongoose: MongoDB와 Express를 잘 연결할 수 이게 해주는 함수들의 집합