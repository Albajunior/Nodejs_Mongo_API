const express = require("express");
const router = express();
const transactionCtrl = require("../controllers/transaction");

const auth = require("../middleware/auth.js")

router.post('/:accountId',auth, transactionCtrl.create);
router.get('/:accountId',auth, transactionCtrl.readAll);
// router.delete('/delete/:id', auth, transactionCtrl.delete);
// router.put('/update/:id', auth, transactionCtrl.update);

module.exports = router;