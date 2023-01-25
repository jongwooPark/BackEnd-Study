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

const users = {
  id: ["park", "ghfhg", "bnvh"],
  password: ["1234", "765675", "897987"],
};
const process = {
  login: (req, res) => {

    const id = req.body.id;
    const password = req.body.password;

   
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);

      if (password === users.password[idx]) {
        return res.json({
          sucess: true,
        });
      } else {
        return res.json({
          sucess: false,
          msg : "비밀번호가 틀립니다."
        })    
      }
    } else {
      return res.json({
        sucess: false,
        msg : "계정이 없습니다."
      })
    }
  },
};

module.exports = {
  output,
  process,
};
