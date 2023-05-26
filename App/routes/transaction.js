const express = require("express");
const router = express();
const transactionCtrl = require("../controllers/transaction");

const auth = require("../middleware/auth.js")

router.post('/',auth, transactionCtrl.create);
router.get('/',auth, transactionCtrl.readAll);
// router.delete('/delete/:id', auth, transactionCtrl.delete);
// router.put('/update/:id', auth, transactionCtrl.update);

module.exports = router;