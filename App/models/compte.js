// Import de Mongoose
const mongoose = require("mongoose");

// Création du schéma pour la collection "compte"
const compteSchema = new mongoose.Schema({
  bankName: { type: String, required: [true, "Required Field"] },
  customName: {
    type: String,
    required: [true, "Required Field"],
    maxLength: [50, "Less than 50 characters please"],
  },
  lastUpdated: { type: Date, required: [true, "Required Field"] },
  user: {
    required: [true, "Required Field"],
    type: mongoose.Types.ObjectId,
    $ref: "User",
  },
});

// Création du modèle pour la collection "compte"
const Compte = mongoose.model(Compte, compteSchema);
