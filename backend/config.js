import dotenv from "dotenv";
dotenv.config();

const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD;
const STRIPE_SECRET_KEY =
  "sk_test_51QoJ7JSFmVAXeU7VU9WJAXgdYDBxYxAwrquwPz8dwRYEa4IhjnVw1DwcyESFbizA14tInjgBprtIlRLuHRfOeTe300c9R146a3";

export default {
  JWT_USER_PASSWORD,
  JWT_ADMIN_PASSWORD,
  STRIPE_SECRET_KEY,
};
