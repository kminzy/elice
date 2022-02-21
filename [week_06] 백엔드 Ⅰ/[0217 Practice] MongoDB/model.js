const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  pw: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('elice_user', userSchema);
// 스키마를 만들고 밖으로 빼는 작업
// elice_user = Collection 이름
// 큰 DB 틀 안의 user들이 모일 공간


// 데이터 설계 작업 => 스키마 설계
// 데이터베이스의 뼈대 구축 !!