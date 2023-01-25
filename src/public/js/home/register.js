const id = document.querySelector("#id");
const name = document.querySelector("#name");
const pass = document.querySelector("#password");
const rePass = document.querySelector("#re-password");
const registerBtn = document.querySelector("#button");

console.log("kkkkk");

registerBtn.addEventListener("click", register);

function register() {
  const req = {
    id: id.value,
    password: pass.value,
    name : name.value,
    rePass : rePass.value,


  };

  console.log(req);

 
  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error("로그인 중 에러 발생"));
    });

}
