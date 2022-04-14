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
  currency: "KES",
  amount: "7500",
  email: "developers@flutterwavego.com",
  fullname: "Flutterwave Developers",
  tx_ref: "MC-3243e",
  redirect_url: "https://your-awesome.app/payment-redirect",
  enckey: process.env.FLW_ENCRYPTION_KEY,
  authorization: {
    mode: "pin",
    pin: "3310",
  },
};

// I will be calling the charge card endpoint twice—the first time to find out the authorization mode, and the second to authorize the charge
flw.Charge.card(payload)
  .then((response) => console.log("RES", response))
  .catch((e) => console.log(e));

const response = await flw.Charge.validate({
    otp: req.body.otp,
    flw_ref: req.session.flw_ref,
  });