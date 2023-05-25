// Import de Mongoose
const mongoose = require("mongoose");
//email unique
var uniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcrypt");

// Création du schéma pour la collection "users"
const userSchema = new mongoose.Schema({
  lastname: { type: String },
  email: {
    type: String,
    required: [true, "Required Field"],
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
  password: {
    type: String,
    required: [true, "Required Field"],
    validate: {
      validator: function (password) {
        // Utilisation d'une expression régulière pour valider le format del'adresse e-mail
        const passwordRegex =
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
      },
      message: "Veuillez fournir un password valide",
    },
  },
});

// Apply the uniqueValidator plugin to userSchema.
userSchema.plugin(uniqueValidator);

//hashPassword
 userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
   this.password = await bcrypt.hash(this.password, 10);
  }
  next();
})

// Création du modèle pour la collection "utilisateurs"
const User = mongoose.model("User", userSchema);

module.exports = User;