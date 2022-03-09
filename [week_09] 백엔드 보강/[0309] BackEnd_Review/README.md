## 백엔드 개발자가 해야할 것

- 기능 개발
- 유저 목록을 가져오는 기능
- AI를 적용한다면 ? 클라이언트 쪽에서 이미지만 서버한테 전달
  - 서버는 받은 이미지를 AI 모델에 돌림 => 다시 클라이언트로 돌려준다.
- 인증/인가
- 백엔드 개발이 끝나면 => 명세서를 작성.

🔹 클라이언트에서 오는 모든 정보는 req에 담겨있다.

<br />

## JSON-SERVER API 명세서

### GET /data

- data.json 읽고 돌려줌
- 필요 헤더: 없음
- 예상 결과값

```json
[
  {
    "id": 0,
    "title": "Hi",
    "body": "Hello World"
  },
  {
    "id": 2,
    "title": "zcx",
    "body": "qwerqewr"
  },
  {
    "id": 1,
    "title": "adsfadsf",
    "body": "qwerqewr"
  }
]
```

### GET /data/:id

- data.json에서 id를 찾아서 돌려줌
- 필요 헤더: 없음
- Response Data

```json
{
  "id": 0,
  "title": "Hi",
  "body": "Hello World"
}
```

### POST /data

- 바디에서 온 데이터 data.json에 추가
- 필요 헤더: Content-Type: 'application/json'
- 필요 바디: Any JSON
- Response

```json
~~~
```

### DELETE /data/:id

- 해당 id data.json에서 지움
- 필요 헤더: 없음
- Response

```json
~~~
```
