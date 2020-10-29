const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HStKpDKEm9DAMNvycGw3LGxyrFQ1MiCOOVnqA5JMt0eHUdXDwZyaMFuWyYSI3R3RrlYHDNcDrVQdmFOqy2WB9ai00tnA8xcbd"
);

// API

// - App config
const app = express();

// - Middelwares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received for this amout >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "eur",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/b2beurope-80cfa/us-central1/api
