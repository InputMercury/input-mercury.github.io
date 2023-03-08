// src: https://medium.com/swlh/how-to-create-your-first-login-page-with-html-css-and-javascript-602dd71144f1
// thanks!

const loginForm = document.getElementById("login-form"); //login form information
const loginButton = document.getElementById("login-form-submit");//login submit button
const loginErrorMsg = document.getElementById("login-error-msg");//variable to store whether to display the error message for incorrect login

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "rabbit" && password === "bunny wit a.bat" || username === "cas" && password === "caz" || username === "ks" && password === "gatekeep"){
    alert("ADMIN");
    window.open("PAGES/index.html");
    close();
  }
  else if (username === "x" && password === "DrJava") { //future: give nymona & sol access
      alert("Edit & Read Access: Allowed");
      window.open("https://docs.google.com/document/d/1I-bnfVU5TXorBlwynhGGzMYuhWkUSrfbTJaH0_96ZGQ/edit");
      window.top.close();
  }
  else if (username === "" && password ==="") {
    alert("Please Enter a Value for Each Option");
  }
  else {
    if (tries === 3) {
      window.top.close();
    }
    else {

    }
    alert("Login attempts:" + tries);
    loginErrorMsg.style.opacity = 1;
  }
})
