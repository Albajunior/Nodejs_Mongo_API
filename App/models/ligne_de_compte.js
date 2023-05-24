// Import de Mongoose
const mongoose = require("mongoose");

// Création du schéma pour la collection "users"
const lignecompteSchema = new mongoose.Schema({
  label: { type: String, required: true },
  type: {
    type: String,
    enum: ["debit", "credit"],
    required: true,
  },
  amount: { type: Number, required: true },
  paymentDate: { type: Date, required: true },
  paymentMethod: {
    type: String,
    enum: ["Credit Card", "Bank Transfer", "Direct Deposit", "Cash"],
    required: true,
  },
  isChecked: { type: Boolean, required: true },
  category: { type: mongoose.Types.ObjectId, $ref: "Category" },
  accountId: { type: mongoose.Types.ObjectId, $ref: "Compte" },
});

// Création du modèle pour la collection "utilisateurs"
const Lignecompte = mongoose.model(Lignecompte, lignecompteSchema);
