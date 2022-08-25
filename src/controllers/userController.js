const User = require("../models/userModel");

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user.password == req.body.password) {
      res.status(200).json(user.name);
    } else {
      res.status(401).send("Invalid Credentials!");
    }
  } catch {
    res.status(400);
    res.send({ error: "Unable to get user!" });
  }
};

const signup = async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(200).json(newUser);
  } catch {
    res.status(400);
    res.send({ error: "Unable to add new user to the database!" });
  }
};

module.exports = { login, signup };
