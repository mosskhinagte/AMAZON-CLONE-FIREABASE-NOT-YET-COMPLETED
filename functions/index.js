const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "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"
);

//API

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) =>
  response.status(200).send("hello Moss brilliant")
);

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Received BOOM!!! for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//Listen command

exports.api = functions.https.onRequest(app);
//Example enpoint
//http://localhost:5001/challenge-9e937/us-central1/api
