const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/user");
const session = require('express-session');
const passport = require('passport');
const { Strategy } = require('passport-local');

mongoose
  .connect("mongodb+srv://admin:1234@cluster0.p1xn6.mongodb.net/elice")
  .then(async () => {
    try {
      const user = new User({
        username: "elice",
        password: "1234",
      });
      await user.save();

      const user2 = new User({
        username: "elice2",
        password: "5678",
      });
      await user2.save();
    } catch (e) {
      console.log("데이터 이미 있음");
    }
  })
  .catch((e) => {
    console.log("DB 연결 실패", e);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// body username, password
passport.use(
  new Strategy(async (username, password, done) => {
    console.log("Strategy에서 받은 값", username, password);
    const userData = await User.findOne({username});

    //username: elice, password: 1234, ObjectId: ~~~

    if(userData === null) {
      // 아이디가 없는 경우
      done(null, false);
    }
    else if(userData.password === password) {
      // 로그인 성공
      done(null, userData);
    }
    else {
      // 비밀번호 틀림
      done(null, false);
    }
  })
);

passport.serializeUser((user, done) => {
  console.log('최초 인증된 유저', user);
  done(null, user); // 여기서 브라우저한테 쿠키(입장권) 나눠주고 세션 내부적으로 저장
});

passport.deserializeUser((user, done) => {
  console.log('이미 인증된 유저', user); // serialize done에서 보낸 user가 여기로 들어온다
  done(null, user); // req.user 갱신
});

app.use((req, res, next) => {
  console.log(req.session);
  next();
});

app.post('/login', passport.authenticate('local', {
  successRedirect: "/", // 성공했을 때 res.redirect('/') 와 같은말
  failureRedirect: "/login" // 실패했을 때 res.redirect('/login') 과 같은말
}));

app.get('/login', (req, res) => {
  res.send(`
    <form action="/login" method="POST">
      <input type="text" name="username" />
      <input type="password" name="password" />
      <input type="submit" value="로그인" />
    </form>
  `);
});

app.get('/logout', (req, res) => {
  req.logout(); // 클라이언트가 서버와 연결된 상태라면 세션 지움
  console.log(req.session);
  res.redirect('/');
});

const post = [];
app.post('/post', (req, res) => {
  if (req.user === undefined) {
    res.send({
      status: "로그인이 필요합니다."
    });
    return;
  }
  const { title, body } = req.body;
  const { username } = req.user;

  post.push({
    title,
    body,
    author: username,
  });
  res.redirect('/');
});

app.get('/', (req, res) => {
  console.log(req.user);
  if (req.user === undefined) {
    res.redirect('/login');
  } else {
    res.send(`
      <h1>${req.user.username}님 안녕하세요.</h1>
      <a href="/logout">로그아웃</a>
      <form action ="/post" method="POST">
        <input type="text" name="title" placeholder="제목">
        <textarea name="body" placeholder="내용"></textarea>
        <input type="submit">
      </form>

      ${post.map(p => `
        <div>
          <p>제목: ${p.title}</p>
          <p>작성자: ${p.author}</p>
          <p>${p.body}</p>
        </div>
        <hr />
      `).join("")}
    `);
  }
});

app.listen(3000, () => console.log("3000 port listen"));