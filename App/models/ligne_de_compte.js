// Import de Mongoose
const mongoose = require("mongoose");

// Création du schéma pour la collection "users"
const lignecompteSchema = new mongoose.Schema({
    label: { type: String, required: true },
    type: { type: String, required: true },
    amount: { type: Number, required: true },
    paymentDate: { type: Date, required: true },
    paymentMethod: { type: String, required: true },
    isChecked: { type: Boolean, required: true },
    category: { type: String, required: true },
    accountId: { type: String, required: true },
    
})

// Création du modèle pour la collection "utilisateurs"
const Lignecompte = mongoose.model(Lignecompte, lignecompteSchema);