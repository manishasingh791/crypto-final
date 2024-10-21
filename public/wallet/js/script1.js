
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  update,
  get,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDaP626t5yai5YoLxlM1jGTQZOU9sQRS-I",
  authDomain: "cryptodatabase-212fe.firebaseapp.com",
  projectId: "cryptodatabase-212fe",
  storageBucket: "cryptodatabase-212fe.appspot.com",
  messagingSenderId: "279272856166",
  appId: "1:279272856166:web:ddb8e6b14679355a6b2ba7",
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

window.onload = function() {
    var user = localStorage.getItem("login_info");
   
    if (user == null) {
      alert("Please login first");
    } 
    else {
        const user = JSON.parse(localStorage.getItem("login_info"));
        const email = user.email;
        const sanitizedEmail = email.replace(".", "_");
        const referencePath = "users/" + sanitizedEmail;
        const userRef = ref(db, referencePath);
       
        var balanceElement = document.getElementById("balance");
        var investedElement = document.querySelector("#invest");
        var start_bal = document.getElementById("start_bal");
        var profit_loss_ = document.getElementById("profit_loss_");
        

        get(userRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const userData = snapshot.val();
            const currBalance = parseFloat(userData.curr_balance);
            const invested = parseFloat(userData.invested).toFixed(2);
            const starting_bal = parseFloat(userData.starting_bal).toFixed(2);
            
  
            balanceElement.textContent = currBalance.toFixed(2);
            investedElement.textContent = invested;
            start_bal.innerText = starting_bal;
            profit_loss_.innerText = parseFloat(starting_bal-invested).toFixed(2);
            
              }
    })
    }
  };
  

const deposit_btn = document.getElementById("deposit");
deposit_btn.addEventListener("click", (event) => {


  event.preventDefault();
  var user = localStorage.getItem("login_info");
   
  if (user == null) {
    alert("Please login first");
  } 
  else {
    const user = JSON.parse(localStorage.getItem("login_info"));
    const email = user.email;
    const sanitizedEmail = email.replace(".", "_");
    const referencePath = "users/" + sanitizedEmail;
    const userRef = ref(db, referencePath);
    
    const deposit_input = document.getElementById('deposit_input')
    const balance = document.getElementById('balance');
    var balanceElement = document.getElementById("balance");

    get(userRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.val();
          const currBalance = userData.curr_balance;
          const starting_balance = userData.starting_bal;
          const invested = parseFloat(userData.invested);
         
          var balanceElement = document.getElementById("balance");

          balanceElement.textContent = currBalance;

            const  referencePath = "users/" + sanitizedEmail;
             const userRef = ref(db, referencePath);
           
                update(userRef, {
                  curr_balance: parseFloat(currBalance) + parseFloat(deposit_input.value),
                  starting_bal: parseFloat(starting_balance) + parseFloat(deposit_input.value),
              
                })
                .then(() => {
                    window.location.reload();
                  
                })
                .catch((error) => {
                  console.error("Error ", error);
                });

            }
  })

}
});