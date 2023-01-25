const fs = require("fs");

class UserStorage {
  static #users = {
    id: ["park", "ghfhg", "bnvh"],
    password: ["1234", "765675", "897987"],
    names: ["박종우", "갑을병", "신상무"],
  };

  static getUsers(...fields) {
    //console.log("kk8 :", filds);
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      // console.log(newUsers, field);
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});

    console.log(newUsers);
    return newUsers;
  }

  static getUserInfo(id) {
    fs.readFile("./src/databases/users.json", (err, data) => {
      if (err) throw err;
      console.log(JSON.parse(data));
    });

    const users = this.#users;
    const idx = users.id.indexOf(id);
    const userKeys = Object.keys(users);
    const userInfo = userKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo;
  }

  static save(body) {
    const users = this.#users;
    users.id.push(body.id);
    users.password.push(body.password);
    users.names.push(body.name);

    console.log(users);
  }
}
module.exports = UserStorage;
