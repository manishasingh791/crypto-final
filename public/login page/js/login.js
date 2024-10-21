import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBRLUnL51anP2pF0hbZklZUcmej_KHG3Iw",
  authDomain: "crypto-login-788a4.firebaseapp.com",
  projectId: "crypto-login-788a4",
  storageBucket: "crypto-login-788a4.appspot.com",
  messagingSenderId: "266717628696",
  appId: "1:266717628696:web:9de78dac37a9dcc526f66d",
  measurementId: "G-DPY4SLLVQJ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

var email = document.getElementById("email");
var password = document.getElementById("password");

window.login = function (e) {
  e.preventDefault();
  var obj = {
    email: email.value,
    password: password.value,
  };
   var json = JSON.stringify(obj);
  signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (success) {
      
      localStorage.setItem("login_info", json);
      console.log("user log in successfull");
      window.history.back();

    })
    .catch(function (err) {
      alert("error" + err);
    });
  // console.log(obj);
};
window.addEventListener('popstate', function(event) {
  location.reload();
});
