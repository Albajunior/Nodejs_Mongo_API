const express = require("express");
const router = express();
const userCtrl = require("../controllers/user.js");

router.post("/signup", userCtrl.signup);
router.get("/login", userCtrl.login);

module.exports = router;

