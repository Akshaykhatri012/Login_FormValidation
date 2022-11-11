let frontpage = document.getElementById("frontpage")

function openSignup(){
  frontpage.style.transform = "rotateY(-180deg)";
  
}
function openLogin(){
  frontpage.style.transform = "rotateY(0deg)";
}



let form1 = document.getElementById("form_1")

let login_username = document.getElementById("login_username")
let login_password = document.getElementById("login_password")

let form2 = document.getElementById("form_2")

let Name = document.getElementById("Name")
let username = document.getElementById("username")
let password = document.getElementById("password")
let password_2 = document.getElementById("password_2")

form1.addEventListener('submit',e =>{
  e.preventDefault();
  checkInputs_login();
  // console.log('yhu jju')

})

form2.addEventListener('submit',e =>{
  e.preventDefault();
  checkInputs_signup();
  // console.log('helloo there')
  })
  
  function checkInputs_login(){
    const login_usernameValue = login_username.value.trim();
    const login_passwordValue = login_password.value.trim();
    
    // conditionals for login_usernameValue
    if (login_usernameValue === '') {
      setErrorFor(login_username, 'Username cannot be blank')
  } else {
    setSuccessFor(login_username);
  }
  
  // conditionals for login_passwordValue
  if (login_passwordValue === "") {
    setErrorFor(login_password, "password cannot be blank")
  } else if(login_passwordValue.length <=7){
    setErrorFor(login_password, "password must be greater than 7 char")
  }else {
    setSuccessFor(login_password)
  }
}

function checkInputs_signup(){
  const nameValue = Name.value.trim();
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  const password_2Value = password_2.value.trim();
  
  
  // conditionals for nameValue
  if (nameValue === "") {
    setErrorFor(Name,"name cannot be blank")
  } else {
    setSuccessFor(Name)
  }
  
  // conditionals for UsernameValue
  if (usernameValue === "") {
    setErrorFor(username,"username cannot be blank")
  } else if(usernameValue.length <6){
    setErrorFor(username,"username must contain atleast 6 char")
  }
  else {
    setSuccessFor(username)
  }
  
  // conditionals for passwordValue
  if (passwordValue === "") {
    setErrorFor(password, "password cannot be blank")
  } else if(passwordValue.length = 7 && passwordValue.length < 8 ){
    setErrorFor(password, "password must be greater than 7 char")
  }else {
    setSuccessFor(password)
  }
  
  // conditionals for password_2Value
  if (password_2Value ==='') {
    setErrorFor(password_2,"password cannot be blank")
  } else if(passwordValue !== password_2Value){
    setErrorFor(password_2,'password does not match !')
  }
  else if(password_2Value.length = 7 && password_2Value.length < 8 ){
    setErrorFor(password_2, "password must be same as above")
  }else{
    setSuccessFor(password_2)
  }
}


function setErrorFor(input, message){
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = "form-control error";
  small.innerText = message;
}


function setSuccessFor(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

/* --------js completed---------- */









