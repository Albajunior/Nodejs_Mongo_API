const express = require('express');
const app = express();
const db = require('./App/models/db');
const router = require("./App/routes/index.js");

//Ajout des routes
app.use(express.json());
app.use("/api", router);

module.exports = app;