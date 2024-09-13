const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
  console.log("User", req.user);
  // console.log("first:", req.headers.authorization);
  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhODNlMjc5LThjNWYtNDEwMC05NDcwLWZjZTk4MzAyM2I1ZSIsImlhdCI6MTcyNTQxOTk1MiwiZXhwIjoxNzI1NDIzNTUyfQ.aNT_ifpVHRQEW_AEm0Hdq4QcJwKWedSKrZWu-4-m8ck

  if (!req.headers.authorization) {
    res.status(401).json({ message: "You must login." });
  }

  const token = req.headers.authorization.split(" ")[1];
  const user = jwt.verify(token, "JWT_TOKEN_PASS@123");
  req.user = user;
  next();
};
