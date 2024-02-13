const password = document.querySelector("#input");
const showPassword = document.querySelector("button");

const str = document.querySelector(".strength");
const message = document.querySelector(".message")


showPassword.addEventListener("click",()=>{
     
    if(password.value == ""){
        console.log("error")
    }
    else if(password.type == "password"){
         password.type = "text";
         showPassword.innerHTML = "Hide password"
    }
     else{
        password.type = "password"
        showPassword.innerHTML = "Show password"
     }
})


password.addEventListener("input",()=>{
    if(password.value.length > 0){
       message.style.display = "block";
    }
    else{
        message.style.display = "none"
    }
    if(password.value.length < 4){
        str.innerHTML = "weak";
        password.style.borderColor = "red";
        str.style.color = "red"  

    }
    else if(password.value.length > 4 && password.value.length < 8){
        str.innerHTML = "medium";
        password.style.borderColor = "orange";
        str.style.color = "orange" 
    }
    else if(password.value.length >=8){
        str.innerHTML = "Strong"
        password.style.borderColor = "green";
        str.style.color = "green" 
    }
})


