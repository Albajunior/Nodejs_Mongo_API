// Import de Mongoose
const mongoose = require("mongoose");

// Création du schéma pour la collection "users"
const compteSchema = new mongoose.Schema({
    bankName: { type: String, required: true },
    customName: { type: String, required: true, maxLength:  [50, 'Moins de 50 caractere svp']},
    lastUpdated: { type: Date, required: true },
    user: { type: mongoose.Types.ObjectId, $ref: "User" }
})

// Création du modèle pour la collection "utilisateurs"
const Compte = mongoose.model(Compte, compteSchema);