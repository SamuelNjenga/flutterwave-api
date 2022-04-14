const Flutterwave = require("flutterwave-node-v3");
require("dotenv").config();

const flw = new Flutterwave(
  process.env.FLW_PUBLIC_KEY,
  process.env.FLW_SECRET_KEY
);

const payload = {
  card_number: "5531886652142950",
  cvv: "564",
  expiry_month: "09",
  expiry_year: "32",
  currency: "NGN",
  amount: "7500",
  email: "developers@flutterwavego.com",
  fullname: "Flutterwave Developers",
  tx_ref: "MC-3243e",
  redirect_url: "https://your-awesome.app/payment-redirect",
  enckey: process.env.FLW_ENCRYPTION_KEY,
};

flw.Charge.card(payload)
  .then((response) => console.log("RES", response))
  .catch((e) => console.log(e));
