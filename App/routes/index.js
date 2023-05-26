const express = require('express')
const router = express();
const userRoutes = require('./user.js') ;
const categoryRoutes = require('./category.js') 
const compteRoutes = require('./compte.js') 

router.use("/auth", userRoutes);
router.use("/category", categoryRoutes);
router.use("/compte", compteRoutes);
module.exports = router