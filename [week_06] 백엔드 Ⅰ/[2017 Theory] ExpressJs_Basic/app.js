const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello, world')
})

app.listen(3000, () => {
  console.log('3000번 포트에서 웹서버를 실행중입니다...')
})