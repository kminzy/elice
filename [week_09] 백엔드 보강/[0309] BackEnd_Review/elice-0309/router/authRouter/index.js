const express = require("express");
const router = express.Router();
const User = require("../../model/User");
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const findUser = await User.findOne({
      username,
    });

    if (!findUser) {
      res.json({
        status: "fail",
        message: "아이디가 존재하지 않습니다.",
      });
    } else if (findUser.password !== password) {
      res.json({
        status: "fail",
        message: "비밀번호가 존재하지 않습니다.",
      });
    } else {
      // 로그인 성공
      const token = jwt.sign(
        {
          username,
        },
        process.env.JWT_KEY,
        {
          expiresIn: "1h",
        }
      );
      res.json({
        status: "succ",
        token,
      });
    }
  } catch (e) {
    res.json({
      status: "fail",
      message: e,
    });
  }
});

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const newUser = new User({
      username,
      password,
    });
    await newUser.save();
    res.json({
      status: "succ",
    });
  } catch (e) {
    res.json({
      stauts: "fail",
      message: e,
    });
  }
});

module.exports = router;
