const login_btn = document.getElementById("btn_signup");
const signup_btn = document.getElementById("btn_login");

const buttons_login = document.getElementsByClassName("buttons_login");

var user = localStorage.getItem("login_info");

const logout_btn = document.getElementById("logout_btn");

function login() {
  user = JSON.parse(user);
  if (user == null) {
    login_btn.style.display = "block";
    signup_btn.style.display = "block";
    redirectToLogin();
  } else {
    logout_btn.style.display = "block";
  }
  function redirectToLogin() {
    console.log("Redirecting to login");
    setTimeout(function () {
      window.location.href = "/login";
    }, 600000);
  }
}

login();

window.addEventListener("popstate", function (event) {
  location.reload();
});

//logout------------------------------------------>
logout_btn.addEventListener("click", () => {
  localStorage.removeItem("login_info");

  signup_btn.style.display = "block";
  login_btn.style.display = "block";
  logout_btn.style.display = "none";
  location.reload();
});
signup_btn.addEventListener("click", () => {
  window.location = "/signup";
});

login_btn.addEventListener("click", () => {
  if (login_btn.innerHTML == "Log Out") {
    localStorage.removeItem("login_info");
    // location.reload();
    login_btn.innerHTML = "Log In";
    signup_btn.style.display = "block";
  } else window.location = "/login";
});

function return_home() {
  window.location.href = "/";
}
