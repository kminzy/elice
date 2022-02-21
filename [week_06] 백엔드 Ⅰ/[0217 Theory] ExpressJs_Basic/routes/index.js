const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('index') // Template Engine 사용 시 render 함수 use
})

module.exports = router