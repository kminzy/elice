const express = require('express')
const path = require('path')

const app = express()

const indexRoute = require('./routes/index.js')

const pickMyFood = () => {
  const food = ['돈까스', '김밥', '초밥', '떡볶이', '샌드위치', '파스타', '부침개', '칼국수', '피자', '치킨', '볶음밥', '짜장&탕수육', '짬뽕&탕수육', '콜라 비빔밥', '오므라이스']
  let idx = Math.floor(Math.random() * food.length)
  return food[idx]
}

app.use('/', indexRoute)

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '/index.html'))
// })

app.get('/food', (req, res) => {
  text = pickMyFood()
  res.send(`오늘 당신에게 추천드리는 메뉴는 바로 ${text} 입니다!!`)
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