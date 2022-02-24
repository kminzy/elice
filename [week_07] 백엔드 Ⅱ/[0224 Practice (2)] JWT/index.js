const e = require("express");
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const user = {
    username: "elice",
    password: "1234",
};

const SECRET_KEY = "hello";

app.post("/login", (req, res) => {
    const {
        username,
        password
    } = req.body;
    if (user.username === username && user.password === password) {
        // 로그인 성공
        const token = jwt.sign({
                username: username,
            },
            SECRET_KEY, {
                expiresIn: "1h",
            }
        );
        res.send({
            status: "로그인 성공",
            token,
        });
    } else {
        // 실패
        res.send({
            status: "로그인 실패",
        });
    }
});

function verifyToken(req, res, next) {
    try {
        const api_key = req.headers["x-api-key"];

        const decoded = jwt.verify(api_key, SECRET_KEY);
        if (decoded) {
            req.user = decoded;
            next();
        }
        res.json({
            error: "해석 실패. 유효하지 않는 토큰"
        });
    } catch (e) {
        console.log(e);
        res.json({
            error: "접근 실패",
            message: e
        });
    }
}

app.get("/", verifyToken, (req, res) => {
    if (req.user) {
        res.send(`${req.user.username}님 환영합니다.`);
    }
    res.send("로그인이 필요합니다");
});

app.post("/data", verifyToken, (req, res) => {
    res.send({
        A: [1, 2, 3, 4, 5],
    });
});

app.listen(3000, () => console.log("3000 port listen"));