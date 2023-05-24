// Import de Mongoose
const mongoose = require("mongoose");
//email unique
var uniqueValidator = require("mongoose-unique-validator");

// Création du schéma pour la collection "users"
const userSchema = new mongoose.Schema({
  lastname: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (email) {
        // Utilisation d'une expression régulière pour valider le format del'adresse e-mail
        const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailRegex.test(email);
      },
      message: "Veuillez fournir une adresse e-mail valide",
    },
  },
  password: { type: String, required: true },
});

// Apply the uniqueValidator plugin to userSchema.
userSchema.plugin(uniqueValidator);

// Création du modèle pour la collection "utilisateurs"
const User = mongoose.model(User, userSchema);
