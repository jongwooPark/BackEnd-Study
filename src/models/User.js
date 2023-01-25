const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const { id, password } = UserStorage.getUserInfo(this.body.id);

    if (id) {
      if (id === this.body.id && password === this.body.password) {
        console.log("로그인 성공 =");
        return { success: true };
      } else {
        console.log("로그인 실패 =");
        return { success: false, msg: "비밀번호가 틀렸습니다." };
      }
    } else {
      return { success: false, msg: "존재하지 않는 아이디입니다." };
    }
  }

  register() {

   // return { success: true, msg: " 가입성공" };
    return { success: false, msg: " 가입 실패" };


  }
}
module.exports = User;
