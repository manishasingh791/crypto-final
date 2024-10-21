const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();
const axios = require('axios');


const port = process.env.PORT || 3000;
const partial_path = path.join(__dirname, "./views/partials");
app.use(express.static("./public"));
hbs.registerPartials(partial_path);
app.set("view engine", hbs);
app.set("views", "./views");
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "hbs");


app.get("/crypto_home", (req, res) => {
  // res.render("index.hbs" , {arr});
  res.render("crypto/Cryptolandingpage.hbs");
});

app.get("/", (req, res) => {
  res.render("start.hbs");
});

app.get("/home", (req, res) => {
  res.render("home.hbs");
});
app.get("/cryptolist", (req, res) => {
  res.render("crypto/cryptolist.hbs");
});


app.get("/coin", (req, res) => {
  const input = req.query.tvwidgetsymbol;

  res.render("crypto/detailedview.hbs", { src: input });
});

app.get("/stock_home", (req, res) => {
  res.render("stock/stocklandingpage.hbs");
});
app.get("/stocklist", (req, res) => {
  res.render("stock/stocklist.hbs");
});

app.get("/stock_detailed_view", (req, res) => {
  const input = req.query.tvwidgetsymbol;
  res.render("stock/stock_detailed_view.hbs", { src: input });
});

app.get("/login", (req, res) => {
  res.render("login.hbs");
});
app.get("/signup", (req, res) => {
  res.render("signup.hbs");
});
app.get("/forgetpassword", (req, res) => {
  res.render("forgetpassword.hbs");
});
app.get("/details", (req, res) => {
  res.render("start_detail.hbs");
});
app.get("/wallet", (req, res) => {
  res.render("crypto/wallet.hbs");
});
app.get("/dashboard", (req, res) => {
  res.render("crypto/dashboard.hbs");
});
app.get("/stock_wallet", (req, res) => {
  res.render("stock/wallet.hbs");
});
app.get("/stock_dashboard", (req, res) => {
  res.render("stock/dashboard.hbs");
});
const arr = [
  "BTCUSDT",
  "ETHUSDT",
  "BNBUSDT",
  "USDTUSDT",
  "ADAUSDT",
  "XRPUSDT",
  "DOGEUSDT",
  "DOTUSDT",
  "BCHUSDT",
  "LTCUSDT",
  "LINKUSDT",
  "XLMUSDT",
  "USDCUSDT",
  "VETUSDT",
  "THETAUSDT",
  "FILUSDT",
  "TRXUSDT",
  "EOSUSDT",
  "XMRUSDT",
  "AAVEUSDT",
  "ATOMUSDT",
  "XTZUSDT",
  "NEOUSDT",
  "CROUSDT",
  "UMAUSDT",
  "XEMUSDT",
  "DAIUSDT",
  "MKRUSDT",
  "SUSHIUSDT",
  "FTTUSDT",
  "COMPUSDT",
  "TFUELUSDT",
  "BTTUSDT",
  "ALGOUSDT",
  "DASHUSDT",
  "ENJUSDT",
  "SNXUSDT",
  "HBARUSDT",
  "ZECUSDT",
  "ONTUSDT",
  "REVUSDT",
  "DCRUSDT",
];
app.get("/viewmore", (req, res) => {
  res.render("crypto/viewmore.hbs", { arr: arr });
});

app.listen(port);
