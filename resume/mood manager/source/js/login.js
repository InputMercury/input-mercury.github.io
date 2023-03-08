// src: https://medium.com/swlh/how-to-create-your-first-login-page-with-html-css-and-javascript-602dd71144f1
// thanks!

const loginForm = document.getElementById("login-form"); //login form information
const loginButton = document.getElementById("login-form-submit");//login submit button
const loginErrorMsg = document.getElementById("login-error-msg");//variable to store whether to display the error message for incorrect login

loginButton1.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  // need to create a for loop that searches the txt file to find username. if password is not equal, return false.
  if (username === "rabbit" && password === "bunny wit a.bat" || username === "cas" && password === "caz" || username === "ks" && password === "gatekeep"){
    alert("ADMIN");
    window.open("index.html");
    close();
  }
  else {
      loginErrorMsg.style.opacity = 1;
  }
})
