const User = require("../../models/User");

const output = {
  index: (req, res) => {
    res.render("home/index");
  },

  about: (req, res) => {
    res.render("home/about");
  },

  login: (req, res) => {
    res.render("home/login");
  },
  help: (req, res) => {
    res.render("home/help");
  },
  working: (req, res) => {
    res.render("home/working");
  },
};

const process = {
  login: (req, res) => {
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
