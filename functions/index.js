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

// - Listen command
exports.api = functions.https.onRequest(app);
