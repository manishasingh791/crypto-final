
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  update,
  get,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyD7F1gX1IMQFGdwyAMgvYQdYkzvM-23iqM",
  authDomain: "stockdb-e21ae.firebaseapp.com",
  databaseURL: "https://stockdb-e21ae-default-rtdb.firebaseio.com",
  projectId: "stockdb-e21ae",
  storageBucket: "stockdb-e21ae.appspot.com",
  messagingSenderId: "192738892506",
  appId: "1:192738892506:web:f7d2490dcf2c4a851863e3",
  measurementId: "G-44FR8QNQQP"
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
            const currBalance = userData.curr_balance.toFixed(2);
            const invested = parseFloat(userData.invested).toFixed(2);
            const starting_bal = parseFloat(userData.starting_bal).toFixed(2);
            
            balanceElement.textContent = currBalance;
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

