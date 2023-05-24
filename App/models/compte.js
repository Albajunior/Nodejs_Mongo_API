// Import de Mongoose
const mongoose = require("mongoose");

// Création du schéma pour la collection "users"
const compteSchema = new mongoose.Schema({
    bankName: { type: String, required: true },
    customName: { type: String, required: true },
    lastUpdated: { type: Date, required: true },
    userId: { type: String, required: true }
})

// Création du modèle pour la collection "utilisateurs"
const Compte = mongoose.model(Compte, compteSchema);