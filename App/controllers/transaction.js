const Transaction = require("../models/transaction");

exports.create = async (req, res) => {
  try {
    const payload = {
      label: req.body.label,
      type: req.body.type,
      amount: req.body.amount,
      paymentDate: Date.now(),
      paymentMethod: req.body.paymentMethod,
      category: req.body.category_id,
      accountId: req.body.accountId,
    };
    const transaction = new Transaction(payload);
    await transaction.save();
    res.status(201).json(transaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erreur: "Erreur lors de la récupération" });
  }
};

exports.readAll = async (req, res) => {
  try {
    const transaction = await Transaction.find({});
    res.status(200).json(transaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erreur: "Erreur lors de la récupération" });
  }
};