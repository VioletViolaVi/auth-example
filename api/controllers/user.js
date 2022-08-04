const User = require("../models/user");

async function login(req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const user = await User.getOneByUsername(username);

  // check if password matches hash

  console.log(username, password);
  console.log(user);

  res.json({
    success: true
  });
}

module.exports = { login };
