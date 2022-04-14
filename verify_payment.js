const Flutterwave = require("flutterwave-node-v3");
require("dotenv").config();

const flw = new Flutterwave(
  process.env.FLW_PUBLIC_KEY,
  process.env.FLW_SECRET_KEY
);

const transactionId = 3289979;

const verifyPayment = async () => {
  const response = await flw.Transaction.verify({ id: transactionId });
  console.log(response);
};

verifyPayment();
