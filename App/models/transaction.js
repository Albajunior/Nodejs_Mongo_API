// Import de Mongoose
const mongoose = require("mongoose");

// Création du schéma pour la collection "ligne de comptes" "
const transactionSchema = new mongoose.Schema({
  label: {
    type: String,
    minLength: [2, "Must be at least 6 character, got {VALUE}"],
    maxLength: [50, "Less than 50 characters please, got {VALUE}"],
    required: [true, "why no label"],
  },
  type: {
    type: String,
    enum: {
      values: ["debit", "credit"],
      message: " {VALUE} is not supported",
    },
    required: [true, "why no type"],
  },
  amount: { type: Number, required: [true, "why no amount"] },
  paymentDate: { type: Date, required: [true, "why no Date"] },
  paymentMethod: {
    type: String,
    enum: {
      values: ["Credit Card", "Bank Transfer", "Direct Deposit", "Cash"],
      message: " {VALUE} is not supported",
    },
    required: [true, "why no payment method"],
  },
  isChecked: { type: Boolean, required: true, default: false },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: [true, "why no Category"],
  },
  accountId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Compte",
    required: [true, "why no accountId"],
  },
});

//middleware Date 
transactionSchema.pre('save', async function(next) {
  if (this.isModified('paymentDate')) {
   this.paymentDate = Date.now();
  }
  next();
})


// Création du modèle pour la collection "ligne de comptes"
const Transaction = mongoose.model("Transaction", transactionSchema);
module.exports = Transaction;