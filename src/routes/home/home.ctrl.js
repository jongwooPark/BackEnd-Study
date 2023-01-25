
const UserStorage = require("../../models/UserStorage");


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

    const id = req.body.id;
    const password = req.body.password;

    const response = {};
    //const userStorage =  new UserStorage();
    //console.log("kk:", UserStorage.getUsers());

    const  users = UserStorage.getUsers("id", "password", "names");



    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);

      if (password === users.password[idx]) {

        response.success = true;
        return res.json({
          sucess: true,
        });
      } else {
        return res.json(response)    
      }
    } else {

      response.success = false;
      return res.json(response)
    }

  },
  
};

module.exports = {
  output,
  process,
};
