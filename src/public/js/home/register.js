const id = document.querySelector("#id");
const name = document.querySelector("#name");
const pass = document.querySelector("#password");
const rePass = document.querySelector("#re-password");
const registerBtn = document.querySelector("#button");

console.log("kkkkk");

registerBtn.addEventListener("click", register);

function register() {
  if (!id.value) return alert("아이디를 입력해 주세요.");
  console.log(pass.value, rePass.values);
  if (pass.value !== rePass.value)
    return alert("비밀번호가 일치하지 않습니다.");

  const req = {
    id: id.value,
    password: pass.value,
    name: name.value,
    rePass: rePass.value,
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
