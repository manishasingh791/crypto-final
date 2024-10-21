var z = 0;
const queryString = window.location.search;

const searchParams = new URLSearchParams(queryString);

const coinname = searchParams.get("tvwidgetsymbol");

const lower_src = coinname.toLowerCase();


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

window.onload = function () {
  var user = localStorage.getItem("login_info");

  if (user == null) {
    alert("Please login first");
  } else {
    const user = JSON.parse(localStorage.getItem("login_info"));
    const email = user.email;
    const sanitizedEmail = email.replace(".", "_");
    const referencePath =
      "users/" + sanitizedEmail + "/" + "holding/" + coinname;
    const userRef = ref(db, referencePath);
    console.log(referencePath);
    const avail_qty = document.getElementById("qty_avail");
    get(userRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.val();
          const qty_avail = userData.qty;
          console.log(qty_avail);
          if (qty_avail == null) qty_avail = 0;
          console.log(qty_avail);
          avail_qty.innerText = qty_avail.toFixed(3);
        } else {
          avail_qty.innerText = "0";
        }
      })
      .catch((error) => {
        // Handle any errors that occurred during the database operation
        console.error("Error fetching data:", error);
      });
  }
};
const buybtn = document.getElementById("buy_btn");
const sellbtn = document.getElementById("sell_btn");
buybtn.addEventListener("click", (event) => {
  event.preventDefault();
  var user = localStorage.getItem("login_info");

  if (user == null) {
    alert("Please login first before buying");
  } else {
    const user = JSON.parse(localStorage.getItem("login_info"));
    const email = user.email;
    const sanitizedEmail = email.replace(".", "_");
    const referencePath = "users/" + sanitizedEmail;
    let amount = parseFloat(document.getElementById("amount").value);  // Parse amount as float
    const userRef = ref(db, referencePath);

    const curr_price = parseFloat(document.getElementById("trade2").innerHTML);  // Parse current price as float

    get(userRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.val();
          const currBalance = parseFloat(userData.curr_balance);
          const invested = parseFloat(userData.invested);

          let qty = 0;
          let avg_price = 0;
          const coinHolding = userData.holding?.[coinname];

          if (coinHolding === undefined) {
            qty = 0;
          } else {
            qty = parseFloat(coinHolding.qty);
            avg_price = parseFloat(coinHolding.avg_price);
          }
          console.log(currBalance, amount);
          if (amount * curr_price > currBalance) {
            alert("You don't have enough money in your wallet");
          } else {
            const newAvgPrice = ((qty * avg_price) + (amount * curr_price)) / (qty + amount);  // Calculate new average price
            console.log(newAvgPrice);

            // Update holdings with the new values
            update(userRef, {
              [`holding/${coinname}`]: {
                curr_price: parseFloat(curr_price),
                avg_price: parseFloat(newAvgPrice),
                qty:parseFloat( parseFloat(qty) + parseFloat(amount)),  // Ensure qty is a number
              },
            })
              .then(() => {
                console.log("New holding added successfully!");
              })
              .catch((error) => {
                console.error("Error adding new holding:", error);
              });

            // Update the user's balance and investment
            update(userRef, {
              curr_balance: currBalance - (amount * curr_price),  // Correct calculation for balance deduction
              invested: invested + (amount * curr_price),
            })
              .then(() => {
                console.log("Balance and investment updated successfully!");
              })
              .catch((error) => {
                console.error("Error updating balance and investment:", error);
              });

            window.location.reload();
          }
        } else {
          console.log("User not found");
        }
      })
      .catch((error) => {
        console.log("Error fetching user details:", error);
      });
  }
});

sellbtn.addEventListener("click", (event) => {
  event.preventDefault();
  var user = localStorage.getItem("login_info");

  if (user == null) {
    alert("Please login first before selling");
  } else {
    const user = JSON.parse(localStorage.getItem("login_info"));
    const email = user.email;
    const sanitizedEmail = email.replace(".", "_");
    const referencePath = "users/" + sanitizedEmail;
    const amount = document.getElementById("amount").value;
    const userRef = ref(db, referencePath);

     z = parseFloat(document.getElementById("trade2").innerHTML);
     
    get(userRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.val();
          const currBalance = userData.curr_balance;
          const invested = parseFloat(userData.invested);

          var qty = 0;
          var avg_price = 0;
          const coinHolding = userData.holding?.[coinname];

          if (coinHolding === undefined) {
            qty = 0;
            alert("you need to buy first");
          } else {
            qty = parseFloat(coinHolding.qty);
            avg_price = parseFloat(coinHolding.avg_price);
          }

          if (amount > qty) {
            alert("you dont have enough to sell");
          } else {
            // if (coinHolding == undefined) {
            const referencePath = "users/" + sanitizedEmail;
            const userRef = ref(db, referencePath);
            const newAvgPrice =
              (qty * avg_price - parseFloat(amount) * z) /
              (qty - parseFloat(amount));
            console.log(qty * avg_price - parseFloat(amount) * z);
            console.log(qty - parseFloat(amount));
            update(userRef, {
              [`holding/${coinname}`]: {
                curr_price: z,
                avg_price: newAvgPrice,
                qty: qty - amount,
              },
            })
              .then(() => {
                console.log("New holding added successfully!");
              })
              .catch((error) => {
                console.error("Error adding new holding:", error);
              });

            update(userRef, {
              curr_balance: currBalance + z * amount,
              invested: invested - parseFloat(z * amount),
            })
              .then(() => {
                console.log("New holding added successfully!");
              })
              .catch((error) => {
                console.error("Error adding new holding:", error);
              });
            window.location.reload();

            // window.location = "./../dashboard";

            //location.reload();
          }

          // }
        } else {
          console.log("User not found");
        }
      })
      .catch((error) => {
        console.log("Error fetching user details:", error);
      });
  }
});
