const express = require("express");
const app = express();
const passport = require("passport");
const Strategy = require("passport-local");
const session = require("express-session");
const mongoose = require('mongoose');

/**
 * ! passport 구현 방법
 * * 1. Strategy
 * * 2. serialize
 * * 3. deserialize
 */

mongoose.connect('mongodb+srv://admin:1234@cluster0.p1xn6.mongodb.net/elice')
    .then(() => {
        console.log('DB 연결 성공');
    }).catch((e) => {
        console.log('DB 연결 실패')
    });

// POST 요청 시 Body 사용을 위한 기본코드
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// passport 사용을 위한 미들웨어 기본코드
app.use(
    session({
        secret: "secret",
        resave: true,
        saveUninitialized: true,
    })
);
app.use(passport.initialize());
app.use(passport.session());

const user = {
    username: 'elice',
    password: '1234',
}

passport.use(new Strategy((username, password, done) => {
    console.log('최초 로그인 상황');
    if (username === user.username && password === user.password) {
        done(null, user);
    } else {
        done(null, false);
    }
}));

passport.serializeUser((user, done) => {
    console.log('브라우저랑 서버한테 로그인했다는 정보를 심는 단계');
    done(null, user); // 여기서는 브라우저한테 쿠키주고 나한테 세션 데이터 저장
});

passport.deserializeUser((user, done) => {
    console.log('이미 정보 있음 req.user로 전달', user);
    done(null, user); // API req.user로 전달
});

// 로그인 요청 오면 전략으로 가 => 전략 거쳐서 성공했다면 기본페이지, 실패하면 다시 로그인페이지로 돌아가라
app.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
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

app.get("/", (req, res) => {
    if (req.user) {
        res.send(`환영합니다 ${req.user.username}님!`);
    } else {
        res.send('로그인이 필요합니다.');
    }
    // res.send("Hello WOrld");
});

app.listen(3000, () => console.log("3000 port open"));
