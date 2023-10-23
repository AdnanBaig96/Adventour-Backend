const jwt = require("jsonwebtoken");

const verifyAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.substring(7);
    jwt.verify(token, "secretkey", (err, decoded) => {
      if (err) {
        console.log(err);
        res.status(400).send({ message: "user not logged in" });
      } else {
        req.userId = decoded.userId;
        next();
      }
    });
  } catch (err) {}
};

module.exports = verifyAuth;
