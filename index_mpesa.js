const { v4: uuidv4 } = require("uuid");
const Flutterwave = require("flutterwave-node-v3");
require("dotenv").config();

const flw = new Flutterwave(
  process.env.FLW_PUBLIC_KEY,
  process.env.FLW_SECRET_KEY
);

const payload = {
  phone_number: process.env.PHONE_NUMBER,
  amount: 15,
  currency: "KES",
  email: process.env.EMAIL,
  tx_ref: uuidv4(),
};

flw.MobileMoney.mpesa(payload).then(console.log).catch(console.log);
