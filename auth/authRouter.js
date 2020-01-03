const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const Users = require("./authModel");

router.post("/register", async (req, res) => {
  const user = req.body;
  try {
    await Users.addUser(user);
    res.status(201).json({ message: "New User Registered", user: user });
  } catch (error) {
    res.status(500).json({ message: "Could Not Register User", error: error });
  }
});

router.post("/login", async (req, res) => {
  let { username, password } = req.body;

  try {
    const user = await Users.findBy({ username });
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = genToken(user);
      res.status(200).json({
        message: `Welcome ${user.username}!`,
        token
      });
    } else {
      res.status(401).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error logging in user", error: error });
  }
});

const genToken = user => {
  const payload = {
    subject: "user",
    user: user
  };

  const secret = process.env.JWT_SECRET;

  const options = {
    expiresIn: "1h"
  };

  return jwt.sign(payload, secret, options);
};

module.exports = router;
