const mongoose = require('mongoose');
const User = require('./model');

mongoose.connect('mongodb://localhost:27017/elice', () => { // elice는 DB 이름, 어플리케이션 하나
  const newUser = new User({
    id: "qwer",
    pw: "1234"
  });
  newUser.save()
    .then((v) => {
      console.log('성공');
    })
    .catch((e) => {
      console.log(e);
    });

  User.find({id:"qwer"}).then((result) => {
    console.log(result);
  });

});