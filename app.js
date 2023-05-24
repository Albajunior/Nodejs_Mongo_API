const express = require('express');
const app = express();
const mongoose = require('mongoose');



mongoose.connect(process.env.MONGO_URI,{ ssl : true })
.then(() => console.log('MongoDB connected !'))
.catch(() => console.log('Erreur with MongoDB connection'));

//Ajout des routes
// app.use(express.json());
// app.use("/api", router);


module.exports = app;