const jwt = require("jsonwebtoken");

function loginRequired(req, res, next) {
  const token = req.headers["x-api-key"];
  console.log(token);

  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    if (decoded) {
      req.user = decoded;
      next();
    } else {
      res.json({
        status: "fail",
        message: "유효하지 않은 토큰입니다.",
      });
    }
  } catch (e) {
    res.send({
      status: "fail",
      message: e,
    });
  }
}

module.exports = loginRequired;
