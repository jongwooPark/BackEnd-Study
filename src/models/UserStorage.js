class UserStorage {

   static  #users = {
        id: ["park", "ghfhg", "bnvh"],
        password: ["1234", "765675", "897987"],
        names : ["홍길동", "갑을병", "신상무"]
      };

      static getUsers(...fields){
        
        //console.log("kk8 :", filds);
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) =>{

          // console.log(newUsers, field);
          if(users.hasOwnProperty(field)){
            newUsers[field] = users[field]
;          }
            return newUsers;

        }, {})
        
        console.log(newUsers);
        return newUsers;

      }
}
module.exports = UserStorage;
