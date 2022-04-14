const Flutterwave = require("flutterwave-node-v3");
require("dotenv").config();

const flw = new Flutterwave(
  process.env.FLW_PUBLIC_KEY,
  process.env.FLW_SECRET_KEY
);

const validateCharge = async () => {
  const response = await flw.Charge.validate({
    otp: "12345",
    flw_ref: "FLW-MOCK-2a4740a3410cf1208b0e7d8a50b740a2",
  });

  console.log(response);
};
validateCharge();
