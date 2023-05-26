const express = require("express");
const router = express();
const compteCtrl = require("../controllers/compte");

const auth = require("../middleware/auth.js")

router.post('/',auth, compteCtrl.createCompte);
router.get('/',auth, compteCtrl.readAll);
router.delete('/delete/:id', auth, compteCtrl.deleteCompte);

module.exports = router;