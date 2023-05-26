const Compte = require("../models/compte");

exports.createCompte = async (req, res) => {
  try {
    const payload = {
      bankName: req.body.bankName,
      customName: req.body.customName,
      user: req.auth.userId,
    };
    const compte = new Compte(payload);
    await compte.save();
    res.status(201).json(compte);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erreur: "Erreur lors de la récupération" });
  }
};

exports.readAll = async (req, res) => {
  try {
    const compte = await Compte.find({});
    res.status(200).json(compte);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erreur: "Erreur lors de la récupération" });
  }
};

exports.deleteCompte = async (req, res) => {
  try {
    const compteId = req.params.id;
    const compte = await Compte.findById(compteId);

    if (compte === null) {
      return res.status(404).json({ error: "compte non trouvé" });
    } else {
      if (compte.user === req.auth.userId) {
        await compte.deleteOne({ _id: compteId });
        res
          .status(204)
          .json({ message: `Le compte  ${compteId} a été supprimé.` });
      } else {
        res.status(401).json({
          error: "Unauthorized request, not r account!",
        });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ erreur: "Erreur lors de la récupération" });
  }
};

exports.update = async (req, res) => {
  const { bankName, customName } = req.body;
  try {
    const newAccount = await Compte.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.auth.userId,
      },
      {
        bankName,
        customName,
      },
      { returnDocument: "after" }
    );

    if (!newAccount) {
      return res.status(404).json({ error: "compte non trouvé" });
    } else {
      res
        .status(200)
        .json({ message: `Le compte  ${req.params.id} a été modifie.`, newAccount });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ erreur: "Erreur lors de la récupération" });
  }
};
