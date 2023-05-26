// Import de Mongoose
const mongoose = require("mongoose");
const Transaction = require("./transaction");

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
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

//Update Date at create
compteSchema.pre('save', async function(next) {
  if (this.isModified('lastUpdated')) {
   this.lastUpdated = Date.now();
  }
  next();
})

//Update Date
compteSchema.pre('findOneAndUpdate', function(next) {
  this.set({ lastUpdated : Date.now() });
  next();
})


//delete transaction
compteSchema.pre('deleteOne', async function(next) {
  await Transaction.deleteMany({ account: this._id})
  next();
})

// Création du modèle pour la collection "compte"
const Compte = mongoose.model("Compte", compteSchema);
module.exports = Compte;