
const id = document.querySelector("#id");
const pass = document.querySelector("#password");
const loginBtn =  document.querySelector("#btn");


loginBtn.addEventListener("click", login);

function login (){ 
    
    const req = {
        id : id.value,
        password : pass.value

    }
   // console.log('kkk===',JSON.stringify(req));
    fetch("/login", {
        method : 'POST',
        headers : {
            "Content-Type" : "Application/json"
        },
        body : JSON.stringify(req),
    })
    .then((res)=> res.json())
    .then((res)=>{
        console.log(res);
        if(res.sucess){
                location.href = "/";
        } else {
            alert(res.msg)
        }
    })
    .catch((err)=>{
        console.error(new Error("로그인 중 에러 발생"));
    });

}


