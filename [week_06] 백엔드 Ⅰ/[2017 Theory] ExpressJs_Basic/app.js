const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/webtoon', (req, res) => {
  res.send('<h2>현재 준비중입니다..ㅠㅠ 조금만 기다려 주세요. under construction...</h2>')
})

app.get('/profile', (req, res) => {
  res.send('<h2>별명: 멋쟁이, 취미: 별스타그램.. </h2>')
})

app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).send(err.message)
})

app.listen(3000, () => {
  console.log('3000번 포트에서 웹서버를 실행중입니다...')
})