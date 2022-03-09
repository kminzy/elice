const express = require("express");
const router = express.Router();
const User = require("../../model/User");

// 가입된 유저 리스트 출력
// api/user
router.get("/user", async (req, res) => {
  try {
    const allUser = await User.find({}).select("username");
    res.json(allUser);
  } catch (e) {
    res.json({
      status: "fail",
      message: e,
    });
  }
});

module.exports = router;
