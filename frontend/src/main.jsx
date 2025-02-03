import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe("pk_test_51QoJ7JSFmVAXeU7Vy2ObtIiDcNrbcMhZLryUHnPLNT6LdUlbyyUWqikKqVD4xUdSTznoD9S7QEIXFLceAFP93hLH0045Zk2ib8");


createRoot(document.getElementById("root")).render(
  <Elements stripe={stripePromise}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Elements>
);
