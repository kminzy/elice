const express = require("express");
const app = express();
const passport = require("passport");
const Strategy = require("passport-local");
const session = require("express-session");
const mongoose = require('mongoose');
const User = require('./models/user');
const Post = require('./models/posts');
const Comment = require('./models/comment');

/**
 * ! passport 구현 방법
 * * 1. Strategy
 * * 2. serialize
 * * 3. deserialize
 */

mongoose.connect('mongodb+srv://admin:1234@cluster0.p1xn6.mongodb.net/elice')
    .then(async () => {
        console.log('DB 연결 성공');
        try {
            const test1 = new User({
                username: "elice",
                password: "1234"
            });
            await test1.save();
            // 프로미스는 내부에서 콜백함수를 실행, 안에서 throw 던져도 밖에 있는 try 문이 먹지 않음
            // 직렬처리 해줘야 함!!! ==> 완료될 때 까지 기다려줌 ==> 내부에서 throw 발생되게 가능
            const test2 = new User({
                username: "elice2",
                password: "5678"
            });
            await test2.save();
            console.log('데이터 생성 완료');
        } catch (err) {
            console.log('데이터가 이미 존재합니다.');
        }
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

passport.use(new Strategy(async (username, password, done) => {
    console.log('최초 로그인 상황');
    const findData = await User.findOne({
        username
    }); // username으로 유저 찾기

    if (findData === null) { // 못찾은 경우 = 아이디가 없는 경우
        done(null, false);
    } else if (findData.password === password) {
        done(null, findData);
    } else { // 비밀번호 틀린경우
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

app.get('/logout', (req, res) => {
    req.logout(); // 내부 세션에서 지워준다.
    res.redirect('/');
});

app.post('/post', async (req, res) => {
    if (req.user === undefined) {
        res.send({
            status: "로그인이 필요한 서비스입니다."
        });
    }
    const {
        title,
        body
    } = req.body;
    const {
        username
    } = req.user;
    const postData = new Post({
        title,
        body,
        author: username,
        comment: [],
    });
    try {
        await postData.save();
        res.redirect('/');
    } catch (err) {
        res.send({
            status: "fail",
            error_message: err,
        });
    }
});

app.get('/post', (req, res) => {
    res.send(`
        <form action="/post" method="POST">
            <input type="text" name="title" />
            <textarea name="body"></textarea>
            <input type="submit" value="글 작성" />
        </form>
    `);
});

app.post('/post/:title/comment', async (req, res) => {
    if (req.user) {
        const { body } = req.body;
        const newComment = new Comment({
            body,
            author: req.user.username,
        });
        await newComment.save();

        //Post 스키마 comment 어레이 값 수정
        await Post.updateOne({ title: req.params.title }, {
            $push: { comment: newComment }
        });

        res.redirect(`/post/${req.params.title}`);

    } else {
        res.redirect('/login');
    }

})

app.get('/post/:title', async (req, res) => {
    if (req.user) {
        const postData = await Post.findOne({
            title: req.params.title,
        }).populate("comment");
        console.log(postData.comment);
        res.send(`
            <div>
                <a href="/">뒤로가기</a>
                <h1>제목: ${postData.title}</h1>
                <p>작성자: ${postData.author}</p>
                <p>내용: ${postData.body}</p>
                <hr />
                <h2>댓글</h2>
                <form action="/post/${req.params.title}/comment" method="POST">
                    <textarea name="body" placeholder="comment"></textarea>
                    <input type="submit" value="댓글작성" />
                </form>
                ${postData.comment.map((v) => `
                    <div>
                        <p>댓글 작성자: ${v.author}</p>
                        <p>댓글 내용: ${v.body}</p>
                    </div>
                `).join('')}
            </div>
        `);
    } else {
        res.redirect('/login');
    }
});

app.get("/", async (req, res) => {
    if (req.user) {

        const allPost = await Post.find({});

        res.send(`
        환영합니다 ${req.user.username}님!
        <a href="/logout">로그아웃</a>
        <a href="/post">글 쓰기</a>
        <hr />

        ${allPost.map((post) => `<p><a href="/post/${post.title}">${post.title} 작성자 ${post.author}</a></p>`).join("")}

        `);
    } else {
        res.redirect('/login');
    }
    // res.send("Hello WOrld");
});

app.listen(3000, () => console.log("3000 port open"));