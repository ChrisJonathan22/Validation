var userName = document.getElementById("userName");

var password = document.getElementById("password");


var title = document.getElementById("title");

var submit = document.getElementById("submit");
submit.addEventListener("click", check, false);


function check(){
    if (userName.value == "Chris" && password.value == "1234") {
        title.textContent = "Welcome " + userName.value;
        title.style.fontSize = "40px";
        
        //userName.value = "";
        userName.style.display = "none";
        //password.value = "";
        password.style.display = "none";
        submit.style.display = "none";
    
    }
     else {
        document.body.style.backgroundColor = "red";
        title.textContent = "Intruder alert!!!";
        title.style.color = "white";
        title.style.fontSize = "40px";
        userName.value = "";
        password.value = "";
    }
}

